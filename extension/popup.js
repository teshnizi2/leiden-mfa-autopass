// Popup script for Leiden MFA Auto-Pass

document.addEventListener('DOMContentLoaded', () => {
  updateStatus();
  
  document.getElementById('toggleBtn').addEventListener('click', toggleEnabled);
  document.getElementById('settingsBtn').addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
  });
});

function updateStatus() {
  chrome.storage.sync.get(['enabled'], (result) => {
    const enabled = result.enabled !== false; // Default to true
    const statusDiv = document.getElementById('status');
    const toggleBtn = document.getElementById('toggleBtn');
    
    if (enabled) {
      statusDiv.textContent = 'Automation is ENABLED';
      statusDiv.className = 'status enabled';
      toggleBtn.textContent = 'Disable';
    } else {
      statusDiv.textContent = 'Automation is DISABLED';
      statusDiv.className = 'status disabled';
      toggleBtn.textContent = 'Enable';
    }
  });
}

function toggleEnabled() {
  chrome.storage.sync.get(['enabled'], (result) => {
    const newValue = !(result.enabled !== false);
    chrome.storage.sync.set({ enabled: newValue }, () => {
      updateStatus();
      
      // Reload MFA pages to apply changes
      chrome.tabs.query({ url: 'https://mfa.services.universiteitleiden.nl/*' }, (tabs) => {
        tabs.forEach(tab => {
          chrome.tabs.reload(tab.id);
        });
      });
    });
  });
}
