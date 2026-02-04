// Options page script for Leiden MFA Auto-Pass - Fully Automated Version

// Import TOTP generator functions (same as totp-simple.js)
function base32Decode(base32) {
  const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  base32 = base32.toUpperCase().replace(/=+$/, '').replace(/\s+/g, '');
  
  if (base32.length === 0) return null;
  
  let bits = 0;
  let value = 0;
  let index = 0;
  const output = new Uint8Array(Math.ceil((base32.length * 5) / 8));
  
  for (let i = 0; i < base32.length; i++) {
    const charIndex = base32chars.indexOf(base32[i]);
    if (charIndex === -1) continue;
    value = (value << 5) | charIndex;
    bits += 5;
    
    if (bits >= 8) {
      output[index++] = (value >>> (bits - 8)) & 255;
      bits -= 8;
    }
  }
  
  return output.slice(0, index);
}

function intToBytes(num) {
  const bytes = new Uint8Array(8);
  for (let i = 7; i >= 0; i--) {
    bytes[i] = num & 255;
    num = num >>> 8;
  }
  return bytes;
}

async function hmacSha1(key, message) {
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

function dynamicTruncate(hmac, digits) {
  const offset = hmac[hmac.length - 1] & 0x0f;
  const binary = ((hmac[offset] & 0x7f) << 24) |
                 ((hmac[offset + 1] & 0xff) << 16) |
                 ((hmac[offset + 2] & 0xff) << 8) |
                 (hmac[offset + 3] & 0xff);
  
  return binary % Math.pow(10, digits);
}

async function generateTOTP(secret, timeStep = 30, digits = 6) {
  try {
    secret = secret.replace(/\s+/g, '').toUpperCase();
    const key = base32Decode(secret);
    
    if (!key || key.length === 0) {
      throw new Error('Invalid secret key');
    }
    
    const counter = Math.floor(Date.now() / 1000 / timeStep);
    const hmac = await hmacSha1(key, intToBytes(counter));
    const code = dynamicTruncate(hmac, digits);
    
    return {
      code: code.toString().padStart(digits, '0'),
      timeRemaining: timeStep - (Math.floor(Date.now() / 1000) % timeStep)
    };
  } catch (error) {
    return null;
  }
}

let totpUpdateInterval = null;

async function updateTOTPDisplay(secret) {
  if (!secret) {
    document.getElementById('totpCodeDisplay').style.display = 'none';
    return;
  }
  
  const result = await generateTOTP(secret);
  
  if (result) {
    document.getElementById('totpCodeDisplay').style.display = 'block';
    document.getElementById('totpCode').textContent = result.code;
    
    // Update timer and progress bar
    const updateTimer = () => {
      const now = Math.floor(Date.now() / 1000);
      const timeRemaining = 30 - (now % 30);
      const progress = (timeRemaining / 30) * 100;
      
      document.getElementById('totpTimer').textContent = `Refreshes in ${timeRemaining}s`;
      document.getElementById('totpProgress').style.width = progress + '%';
      
      // Regenerate code when timer hits 30
      if (timeRemaining === 30) {
        updateTOTPDisplay(secret);
      }
    };
    
    updateTimer();
    
    // Clear previous interval
    if (totpUpdateInterval) clearInterval(totpUpdateInterval);
    
    // Update every second
    totpUpdateInterval = setInterval(updateTimer, 1000);
  } else {
    document.getElementById('totpCodeDisplay').style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const totpSecretGroup = document.getElementById('totpSecretGroup');
  const credentialsGroup = document.getElementById('credentialsGroup');
  const secretDetectionInfo = document.getElementById('secretDetectionInfo');
  const autoFillCredentialsCheckbox = document.getElementById('autoFillCredentials');
  
  // Toggle credentials fields
  function toggleCredentialsFields() {
    if (autoFillCredentialsCheckbox.checked) {
      credentialsGroup.style.display = 'block';
    } else {
      credentialsGroup.style.display = 'none';
    }
  }
  
  autoFillCredentialsCheckbox.addEventListener('change', toggleCredentialsFields);
  toggleCredentialsFields(); // Initial call
  
  // Load saved preferences
  chrome.storage.sync.get(['enabled', 'autoAdvance', 'autoFillCode', 'autoFillCredentials', 'username', 'password', 'totpSecret', 'secretDetected'], (result) => {
    if (result.enabled !== undefined) {
      document.getElementById('enabled').checked = result.enabled;
    }
    if (result.autoAdvance !== undefined) {
      document.getElementById('autoAdvance').checked = result.autoAdvance;
    }
    if (result.autoFillCode !== undefined) {
      document.getElementById('autoFillCode').checked = result.autoFillCode;
    }
    if (result.autoFillCredentials !== undefined) {
      document.getElementById('autoFillCredentials').checked = result.autoFillCredentials;
    }
    if (result.username) {
      document.getElementById('username').value = result.username;
    }
    if (result.password) {
      document.getElementById('password').value = result.password;
    }
    if (result.totpSecret) {
      document.getElementById('totpSecret').value = result.totpSecret;
      // Show live TOTP code
      updateTOTPDisplay(result.totpSecret);
    }
    
    // Show secret detection info if secret was detected
    if (result.secretDetected && result.totpSecret) {
      secretDetectionInfo.style.display = 'block';
      const infoDiv = secretDetectionInfo.querySelector('.description');
      infoDiv.innerHTML = '<strong>✅ Secret Key Detected and Saved!</strong><br><br>' +
        'Your secret key was automatically detected and saved. The extension is ready for fully automated login.<br><br>' +
        '<strong>Secret Key:</strong> <code>' + result.totpSecret.substring(0, 8) + '...</code>';
    } else {
      secretDetectionInfo.style.display = 'block';
    }
    
    toggleCredentialsFields();
  });
  
  // Update TOTP display when secret key changes
  document.getElementById('totpSecret').addEventListener('input', (e) => {
    const secret = e.target.value.trim();
    if (secret.length >= 16) {
      updateTOTPDisplay(secret);
    } else {
      document.getElementById('totpCodeDisplay').style.display = 'none';
    }
  });

  // Handle form submission
  document.getElementById('settingsForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const preferences = {
      enabled: document.getElementById('enabled').checked,
      autoAdvance: document.getElementById('autoAdvance').checked,
      autoFillCode: document.getElementById('autoFillCode').checked,
      autoFillCredentials: document.getElementById('autoFillCredentials').checked
    };
    
    // Handle credentials if auto-fill is enabled
    if (preferences.autoFillCredentials) {
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      
      if (username) {
        preferences.username = username;
      }
      if (password) {
        preferences.password = password;
      }
    } else {
      preferences.username = '';
      preferences.password = '';
    }
    
    // Handle TOTP secret
    const totpSecret = document.getElementById('totpSecret').value.trim();
    
    if (totpSecret) {
      // Extract secret from otpauth URL if provided
      let finalSecret = totpSecret;
      if (totpSecret.includes('otpauth://') || totpSecret.includes('secret=')) {
        try {
          const url = new URL(totpSecret);
          finalSecret = url.searchParams.get('secret') || totpSecret;
        } catch (e) {
          const match = totpSecret.match(/secret=([A-Z2-7=]+)/i);
          if (match) finalSecret = match[1];
        }
      }
      preferences.totpSecret = finalSecret;
    } else {
      // Check if secret was already auto-detected
      chrome.storage.sync.get(['totpSecret'], (result) => {
        if (result.totpSecret) {
          // Keep existing secret
          preferences.totpSecret = result.totpSecret;
        } else {
          showStatus('Please enter your TOTP secret key or visit the setup page to auto-detect it', 'error');
          return;
        }
        savePreferences(preferences);
      });
      return;
    }
    
    savePreferences(preferences);
  });

  function savePreferences(preferences) {
    chrome.storage.sync.set(preferences, () => {
      showStatus('Settings saved successfully!', 'success');
      
      // Notify content scripts to reload preferences
      chrome.tabs.query({ url: 'https://mfa.services.universiteitleiden.nl/*' }, (tabs) => {
        tabs.forEach(tab => {
          chrome.tabs.reload(tab.id);
        });
      });
    });
  }
});

function showStatus(message, type) {
  const statusDiv = document.getElementById('status');
  statusDiv.textContent = message;
  statusDiv.className = `status ${type}`;
  statusDiv.style.display = 'block';
  
  setTimeout(() => {
    statusDiv.style.display = 'none';
  }, 3000);
}
