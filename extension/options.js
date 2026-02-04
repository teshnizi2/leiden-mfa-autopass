// Options page script for Leiden MFA Auto-Pass - Fully Automated Version

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
