// Background service worker for Leiden MFA Auto-Pass extension - Fully Automated Version

// Import TOTP generator
importScripts('totp-simple.js');

// Listen for extension installation
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    // Set default preferences
    chrome.storage.sync.set({
      enabled: false,
      autoAdvance: true,
      autoFillCode: true
    });
  }

  if (details.reason === 'update') {
    // Migrate sensitive fields from sync to local storage
    chrome.storage.sync.get(['totpSecret', 'username', 'password'], (syncData) => {
      const toMigrate = {};
      if (syncData.totpSecret) toMigrate.totpSecret = syncData.totpSecret;
      if (syncData.username) toMigrate.username = syncData.username;
      if (syncData.password) toMigrate.password = syncData.password;

      if (Object.keys(toMigrate).length > 0) {
        chrome.storage.local.set(toMigrate, () => {
          chrome.storage.sync.remove(['totpSecret', 'username', 'password']);
          console.log('[Background] Migrated sensitive fields from sync to local storage');
        });
      }
    });
  }
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('[Background] Received message:', request.action);
  
  if (request.action === 'generateTOTP') {
    // Generate TOTP code from stored secret
    chrome.storage.local.get(['totpSecret'], async (result) => {
      if (result.totpSecret) {
        try {
          const code = await TOTPGenerator.generate(result.totpSecret);
          sendResponse({ code: code });
        } catch (error) {
          console.error('[Background] TOTP generation error:', error);
          sendResponse({ error: error.message });
        }
      } else {
        sendResponse({ error: 'No TOTP secret configured' });
      }
    });
    return true; // Async response
  }
  
  return false;
});
