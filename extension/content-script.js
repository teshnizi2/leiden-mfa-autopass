// Content script for fully automated Leiden MFA authentication
// ABSOLUTE ONE-TIME ATTEMPT - Uses persistent storage to NEVER retry

(function() {
  'use strict';

  // PERSISTENT LOCK - Check if we've EVER attempted in this browser session
  const LOCK_KEY = 'leiden_mfa_attempted';
  const SESSION_LOCK_KEY = 'leiden_mfa_session_lock';
  
  // Check sessionStorage first (persists across page navigations)
  if (sessionStorage.getItem(SESSION_LOCK_KEY)) {
    console.log('[Leiden MFA Auto-Pass] ❌ LOCKED - Already attempted in this session');
    console.log('[Leiden MFA Auto-Pass] Extension will not run again until you close the browser');
    return;
  }

  // Check window flag (prevents duplicate script injection)
  if (window.__LEIDEN_MFA_EXTENSION_ACTIVE) {
    console.log('[Leiden MFA Auto-Pass] ❌ LOCKED - Script already running on this page');
    return;
  }
  window.__LEIDEN_MFA_EXTENSION_ACTIVE = true;

  // Configuration
  let config = {
    enabled: false,
    autoAdvance: true,
    autoFillCode: true,
    autoFillCredentials: false,
    username: '',
    password: ''
  };

  // Load preferences from storage
  chrome.storage.sync.get(['enabled', 'autoAdvance', 'autoFillCode', 'autoFillCredentials', 'username', 'password', 'totpSecret'], (result) => {
    if (result.enabled !== undefined) config.enabled = result.enabled;
    if (result.autoAdvance !== undefined) config.autoAdvance = result.autoAdvance;
    if (result.autoFillCode !== undefined) config.autoFillCode = result.autoFillCode;
    if (result.autoFillCredentials !== undefined) config.autoFillCredentials = result.autoFillCredentials;
    if (result.username) config.username = result.username;
    if (result.password) config.password = result.password;
    
    if (!config.enabled) {
      console.log('[Leiden MFA Auto-Pass] Extension is disabled in settings');
      return;
    }

    console.log('[Leiden MFA Auto-Pass] ============================================');
    console.log('[Leiden MFA Auto-Pass] Extension loaded - SINGLE ATTEMPT MODE');
    console.log('[Leiden MFA Auto-Pass] Will attempt ONCE and lock for this session');
    console.log('[Leiden MFA Auto-Pass] ============================================');
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => handlePageOnce());
    } else {
      handlePageOnce();
    }
  });

  // Handle page - ONLY ONCE EVER
  function handlePageOnce() {
    console.log('[Leiden MFA Auto-Pass] Analyzing page...');
    
    // Determine page type and handle accordingly
    const pageType = detectPageType();
    console.log('[Leiden MFA Auto-Pass] Detected page type:', pageType);
    
    if (pageType === 'login') {
      handleLogin();
    } else if (pageType === 'chainSelection') {
      handleChainSelection();
    } else if (pageType === 'codeEntry') {
      handleCodeEntry();
    } else {
      console.log('[Leiden MFA Auto-Pass] Unknown page type - no action taken');
    }
  }

  // Detect page type
  function detectPageType() {
    // Check for code entry page FIRST (highest priority)
    if (document.querySelector('input[name="nffc"]') || 
        document.querySelector('input[id="nffc"]') ||
        (document.querySelector('input[type="password"]') && 
         document.body.textContent.includes('Code from non-NetIQ authenticator'))) {
      return 'codeEntry';
    }
    
    // Check for chain selection page
    if (document.querySelector('select[name*="chain"]') || 
        document.querySelector('select[id*="chain"]') ||
        document.body.textContent.includes('Select Authentication Chain') ||
        document.body.textContent.includes('Authentication Chain')) {
      return 'chainSelection';
    }
    
    // Check for login page (username + password, but NOT code field)
    const usernameInput = document.querySelector('input[type="text"][name*="username"]') ||
                         document.querySelector('input[type="text"][name*="user"]') ||
                         document.querySelector('input[type="text"][id*="username"]');
    const passwordInput = document.querySelector('input[type="password"]');
    
    if (usernameInput && passwordInput && !document.querySelector('input[name="nffc"]')) {
      return 'login';
    }
    
    return 'unknown';
  }

  // Handle login page
  function handleLogin() {
    console.log('[Leiden MFA Auto-Pass] ============================================');
    console.log('[Leiden MFA Auto-Pass] ✅ STEP 1: Login page');
    
    if (!config.autoFillCredentials || !config.username || !config.password) {
      console.log('[Leiden MFA Auto-Pass] Auto-fill credentials not configured');
      console.log('[Leiden MFA Auto-Pass] You must manually enter credentials');
      console.log('[Leiden MFA Auto-Pass] ============================================');
      return;
    }
    
    const usernameInput = document.querySelector('input[type="text"][name*="username"]') ||
                         document.querySelector('input[type="text"][name*="user"]') ||
                         document.querySelector('input[type="text"][id*="username"]');
    const passwordInput = document.querySelector('input[type="password"]');
    
    if (usernameInput && passwordInput) {
      console.log('[Leiden MFA Auto-Pass] Filling credentials...');
      usernameInput.value = config.username;
      usernameInput.dispatchEvent(new Event('input', { bubbles: true }));
      usernameInput.dispatchEvent(new Event('change', { bubbles: true }));
      
      passwordInput.value = config.password;
      passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
      passwordInput.dispatchEvent(new Event('change', { bubbles: true }));
      
      if (config.autoAdvance) {
        const loginButton = document.querySelector('button[type="submit"]') ||
                           document.querySelector('input[type="submit"]') ||
                           Array.from(document.querySelectorAll('button')).find(btn => 
                             btn.textContent && btn.textContent.toLowerCase().includes('login')
                           );
        if (loginButton) {
          console.log('[Leiden MFA Auto-Pass] ✅ Clicking login button');
          console.log('[Leiden MFA Auto-Pass] ============================================');
          setTimeout(() => loginButton.click(), 500);
        }
      }
    } else {
      console.error('[Leiden MFA Auto-Pass] ❌ Login fields not found');
      console.log('[Leiden MFA Auto-Pass] ============================================');
    }
  }

  // Handle chain selection page
  function handleChainSelection() {
    console.log('[Leiden MFA Auto-Pass] ============================================');
    console.log('[Leiden MFA Auto-Pass] ✅ STEP 2: Chain selection page');
    
    const chainSelect = document.querySelector('select[name*="chain"]') ||
                       document.querySelector('select[id*="chain"]') ||
                       document.querySelector('select[id="select-chain"]') ||
                       Array.from(document.querySelectorAll('select')).find(select => 
                         select.options && Array.from(select.options).some(opt => 
                           opt.text && opt.text.includes('non-NetIQ')
                         )
                       );

    if (!chainSelect) {
      console.error('[Leiden MFA Auto-Pass] ❌ Chain select dropdown not found');
      const allSelects = Array.from(document.querySelectorAll('select'));
      console.log('[Leiden MFA Auto-Pass] Available select elements:', allSelects.length);
      console.log('[Leiden MFA Auto-Pass] ============================================');
      return;
    }

    const options = Array.from(chainSelect.options);
    console.log('[Leiden MFA Auto-Pass] Available authentication methods:');
    options.forEach((opt, idx) => console.log(`  ${idx + 1}. ${opt.text}`));
    
    // Find "Code from non-NetIQ Authenticator"
    const authenticatorOption = options.find(opt => 
      opt.text && (opt.text.includes('non-NetIQ Authenticator') || opt.text.includes('non-NetIQ'))
    );

    if (authenticatorOption) {
      console.log('[Leiden MFA Auto-Pass] ✅ Selecting:', authenticatorOption.text);
      chainSelect.value = authenticatorOption.value;
      chainSelect.dispatchEvent(new Event('change', { bubbles: true }));
      chainSelect.dispatchEvent(new Event('input', { bubbles: true }));
      
      if (config.autoAdvance) {
        const nextButton = document.querySelector('button[type="submit"]') ||
                          Array.from(document.querySelectorAll('button')).find(btn => 
                            btn.textContent && (btn.textContent.toLowerCase().includes('next') || 
                                               btn.textContent.toLowerCase().includes('continue'))
                          );
        if (nextButton) {
          console.log('[Leiden MFA Auto-Pass] ✅ Clicking Next button');
          console.log('[Leiden MFA Auto-Pass] ============================================');
          setTimeout(() => nextButton.click(), 500);
        } else {
          console.error('[Leiden MFA Auto-Pass] ❌ Next button not found');
          console.log('[Leiden MFA Auto-Pass] ============================================');
        }
      }
    } else {
      console.error('[Leiden MFA Auto-Pass] ❌ "non-NetIQ Authenticator" option not found');
      console.log('[Leiden MFA Auto-Pass] ============================================');
    }
  }

  // Handle code entry page - THIS IS THE CRITICAL STEP
  function handleCodeEntry() {
    console.log('[Leiden MFA Auto-Pass] ============================================');
    console.log('[Leiden MFA Auto-Pass] ✅ STEP 3: Code entry page');
    console.log('[Leiden MFA Auto-Pass] ⚠️  LOCKING SESSION - No more attempts after this');
    console.log('[Leiden MFA Auto-Pass] ============================================');
    
    // SET THE LOCK IMMEDIATELY - Before doing ANYTHING
    sessionStorage.setItem(SESSION_LOCK_KEY, 'true');
    
    // Find code input - prioritize nffc field
    const codeInput = document.querySelector('input[name="nffc"]') ||
                     document.querySelector('input[id="nffc"]') ||
                     document.querySelector('input[type="password"][placeholder*="code"]') ||
                     document.querySelector('input[type="password"][placeholder*="Code"]') ||
                     document.querySelector('input[type="text"][placeholder*="code"]') ||
                     document.querySelector('input[type="text"][placeholder*="Code"]');

    if (!codeInput) {
      console.error('[Leiden MFA Auto-Pass] ❌ FAILED: Code input field not found');
      const allInputs = Array.from(document.querySelectorAll('input'));
      console.error('[Leiden MFA Auto-Pass] Available input fields:');
      allInputs.forEach((input, idx) => {
        console.error(`  ${idx + 1}. type="${input.type}" name="${input.name}" id="${input.id}" placeholder="${input.placeholder}"`);
      });
      console.error('[Leiden MFA Auto-Pass] Please send these logs to debug');
      console.log('[Leiden MFA Auto-Pass] ============================================');
      return;
    }

    console.log('[Leiden MFA Auto-Pass] ✅ Code input found:', {
      type: codeInput.type,
      name: codeInput.name,
      id: codeInput.id,
      placeholder: codeInput.placeholder || '(none)'
    });

    // Generate TOTP code
    console.log('[Leiden MFA Auto-Pass] Requesting TOTP code generation...');
    chrome.runtime.sendMessage({ action: 'generateTOTP' }, (response) => {
      if (!response) {
        console.error('[Leiden MFA Auto-Pass] ❌ No response from background script');
        console.error('[Leiden MFA Auto-Pass] Make sure TOTP secret is configured');
        console.log('[Leiden MFA Auto-Pass] ============================================');
        return;
      }

      if (response.error) {
        console.error('[Leiden MFA Auto-Pass] ❌ TOTP generation failed:', response.error);
        console.error('[Leiden MFA Auto-Pass] Go to extension settings and add your secret key');
        console.log('[Leiden MFA Auto-Pass] ============================================');
        return;
      }

      if (response.code) {
        console.log('[Leiden MFA Auto-Pass] ✅ TOTP code generated:', response.code);
        
        // Fill code
        codeInput.value = response.code;
        codeInput.dispatchEvent(new Event('input', { bubbles: true }));
        codeInput.dispatchEvent(new Event('change', { bubbles: true }));
        codeInput.focus();
        
        console.log('[Leiden MFA Auto-Pass] ✅ Code filled into input field');
        
        // Submit
        if (config.autoAdvance) {
          const submitButton = document.querySelector('button[type="submit"]') ||
                              Array.from(document.querySelectorAll('button')).find(btn => 
                                btn.textContent && (btn.textContent.toLowerCase().includes('next') ||
                                                   btn.textContent.toLowerCase().includes('submit') ||
                                                   btn.textContent.toLowerCase().includes('continue'))
                              );
          if (submitButton) {
            setTimeout(() => {
              console.log('[Leiden MFA Auto-Pass] ✅ Clicking submit button');
              console.log('[Leiden MFA Auto-Pass] ============================================');
              console.log('[Leiden MFA Auto-Pass] 🔒 SESSION LOCKED 🔒');
              console.log('[Leiden MFA Auto-Pass] Extension will NOT run again in this session');
              console.log('[Leiden MFA Auto-Pass] Close browser to reset');
              console.log('[Leiden MFA Auto-Pass] ============================================');
              submitButton.click();
            }, 500);
          } else {
            console.error('[Leiden MFA Auto-Pass] ❌ Submit button not found');
            console.error('[Leiden MFA Auto-Pass] Please manually click Submit/Next');
            console.log('[Leiden MFA Auto-Pass] ============================================');
          }
        } else {
          console.log('[Leiden MFA Auto-Pass] Auto-advance disabled - please click Next manually');
          console.log('[Leiden MFA Auto-Pass] ============================================');
        }
      }
    });
  }

  console.log('[Leiden MFA Auto-Pass] Script initialized - version 2.0.1');
})();
