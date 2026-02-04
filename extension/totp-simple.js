// Simplified TOTP generator for browser extension
// Uses Web Crypto API (async) - call from background script

class TOTPGenerator {
  /**
   * Generate TOTP code from secret key (async)
   * @param {string} secret - Base32 encoded secret key
   * @param {number} timeStep - Time step in seconds (default: 30)
   * @param {number} digits - Number of digits in code (default: 6)
   * @returns {Promise<string>} - TOTP code
   */
  static async generate(secret, timeStep = 30, digits = 6) {
    try {
      // Clean and normalize secret
      secret = secret.replace(/\s+/g, '').toUpperCase();
      
      // Decode base32 secret
      const key = this.base32Decode(secret);
      if (!key || key.length === 0) {
        throw new Error('Invalid secret key');
      }
      
      // Get current time counter
      const counter = Math.floor(Date.now() / 1000 / timeStep);
      
      // Generate HMAC-SHA1
      const hmac = await this.hmacSha1(key, this.intToBytes(counter));
      
      // Dynamic truncation
      const code = this.dynamicTruncate(hmac, digits);
      
      // Pad with zeros if needed
      return code.toString().padStart(digits, '0');
    } catch (error) {
      console.error('[TOTP] Error generating code:', error);
      return null;
    }
  }

  /**
   * Decode base32 string to bytes
   */
  static base32Decode(base32) {
    const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    base32 = base32.toUpperCase().replace(/=+$/, '').replace(/\s+/g, '');
    
    if (base32.length === 0) return null;
    
    let bits = 0;
    let value = 0;
    let index = 0;
    const output = new Uint8Array(Math.ceil((base32.length * 5) / 8));
    
    for (let i = 0; i < base32.length; i++) {
      const charIndex = base32chars.indexOf(base32[i]);
      if (charIndex === -1) {
        console.warn(`[TOTP] Invalid base32 character: ${base32[i]}`);
        continue;
      }
      value = (value << 5) | charIndex;
      bits += 5;
      
      if (bits >= 8) {
        output[index++] = (value >>> (bits - 8)) & 255;
        bits -= 8;
      }
    }
    
    return output.slice(0, index);
  }

  /**
   * Convert integer to 8-byte array (big-endian)
   */
  static intToBytes(num) {
    const bytes = new Uint8Array(8);
    for (let i = 7; i >= 0; i--) {
      bytes[i] = num & 255;
      num = num >>> 8;
    }
    return bytes;
  }

  /**
   * HMAC-SHA1 implementation using Web Crypto API
   */
  static async hmacSha1(key, message) {
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      key,
      { name: 'HMAC', hash: 'SHA-1' },
      false,
      ['sign']
    );
    
    const signature = await crypto.subtle.sign('HMAC', cryptoKey, message);
    return new Uint8Array(signature);
  }

  /**
   * Dynamic truncation (RFC 4226)
   */
  static dynamicTruncate(hmac, digits) {
    const offset = hmac[hmac.length - 1] & 0x0f;
    const binary = ((hmac[offset] & 0x7f) << 24) |
                   ((hmac[offset + 1] & 0xff) << 16) |
                   ((hmac[offset + 2] & 0xff) << 8) |
                   (hmac[offset + 3] & 0xff);
    
    return binary % Math.pow(10, digits);
  }

  /**
   * Extract secret from otpauth:// URL or QR code data
   * @param {string} otpauthUrl - otpauth://totp/... URL or base32 secret
   * @returns {string} - Base32 secret key
   */
  static extractSecretFromURL(otpauthUrl) {
    try {
      // If it's already a base32 string (no spaces, valid chars), return as-is
      if (/^[A-Z2-7=]+$/i.test(otpauthUrl.replace(/\s+/g, ''))) {
        return otpauthUrl.replace(/\s+/g, '').toUpperCase();
      }
      
      // Try parsing as URL
      const url = new URL(otpauthUrl);
      return url.searchParams.get('secret') || null;
    } catch (error) {
      // Try regex extraction
      const match = otpauthUrl.match(/secret=([A-Z2-7=]+)/i);
      if (match) {
        return match[1].toUpperCase();
      }
      // Try to extract from QR code format
      const qrMatch = otpauthUrl.match(/([A-Z2-7]{16,})/i);
      if (qrMatch) {
        return qrMatch[1].toUpperCase();
      }
      return null;
    }
  }
}
