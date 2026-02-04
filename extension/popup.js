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
    const enabled = result.enabled === true; // Default false until user enables
    const statusValue = document.getElementById('statusValue');
    const statusIndicator = document.getElementById('statusIndicator');
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleIcon = document.getElementById('toggleIcon');
    const toggleText = document.getElementById('toggleText');
    
    if (enabled) {
      statusValue.textContent = 'Active';
      statusValue.className = 'status-value enabled';
      statusIndicator.className = 'status-indicator enabled';
      toggleIcon.textContent = '⏸️';
      toggleText.textContent = 'Disable';
    } else {
      statusValue.textContent = 'Disabled';
      statusValue.className = 'status-value disabled';
      statusIndicator.className = 'status-indicator disabled';
      toggleIcon.textContent = '▶️';
      toggleText.textContent = 'Enable';
    }
  });
}

function toggleEnabled() {
  const toggleBtn = document.getElementById('toggleBtn');
  
  // Disable button temporarily to prevent double-clicks
  toggleBtn.disabled = true;
  toggleBtn.style.opacity = '0.6';
  
  chrome.storage.sync.get(['enabled'], (result) => {
    const newValue = !(result.enabled === true);
    chrome.storage.sync.set({ enabled: newValue }, () => {
      updateStatus();
      
      // Re-enable button
      setTimeout(() => {
        toggleBtn.disabled = false;
        toggleBtn.style.opacity = '1';
      }, 300);
      
      // Reload MFA pages to apply changes
      chrome.tabs.query({ url: 'https://mfa.services.universiteitleiden.nl/*' }, (tabs) => {
        tabs.forEach(tab => {
          chrome.tabs.reload(tab.id);
        });
      });
    });
  });
}
