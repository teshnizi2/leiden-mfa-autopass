# Detailed Usage Guide - Fully Automated Leiden MFA Auto-Pass

## 📖 Complete Step-by-Step Instructions

This guide will walk you through setting up and using the **fully automated** Leiden MFA Auto-Pass extension for Microsoft Edge. The extension handles **everything automatically** - no user interaction needed after initial setup!

---

## Part 1: Installation

### Step 1: Prepare the Extension Folder

1. **Locate the extension folder**
   - Navigate to: `/Users/teshnizi/Documents/Auto-Two-Auth-Pass/extension`
   - Make sure you can see these files:
     - `manifest.json`
     - `content-script.js`
     - `background.js`
     - `options.html`
     - `totp-simple.js`
     - `icons/` folder

2. **Keep this folder accessible** (don't move it after installation)

---

### Step 2: Install Extension in Microsoft Edge

1. **Open Microsoft Edge**

2. **Navigate to Extensions Page**
   - Type `edge://extensions/` in the address bar and press Enter
   - OR: Click the three dots (⋯) menu → Extensions → Manage extensions

3. **Enable Developer Mode**
   - Look at the **bottom-left** corner of the extensions page
   - Find the toggle switch labeled **"Developer mode"**
   - Click it to turn it **ON** (it should turn blue)
   - ✅ You should now see new buttons: "Load unpacked", "Pack extension", etc.

4. **Load the Extension**
   - Click the **"Load unpacked"** button
   - A file browser window will open
   - Navigate to: `/Users/teshnizi/Documents/Auto-Two-Auth-Pass/extension`
   - **Important**: Select the **`extension`** folder (the one containing `manifest.json`)
   - Click **"Select Folder"** (Mac) or **"Select Folder"** (Windows)

5. **Verify Installation**
   - You should see **"Leiden MFA Auto-Pass"** in your extensions list
   - The extension icon should appear in your Edge toolbar
   - If you don't see it, click the **puzzle piece icon (🧩)** in the toolbar
   - Status should show "Enabled" (toggle should be blue/on)

---

## Part 2: Set Up Secret Key (One-Time Setup)

### Step 3: Automatic Secret Key Detection (Recommended)

This is the **easiest method** - the extension will automatically detect and save your secret key!

1. **Log into Leiden University Account Services**
   - Go to: `https://accountservices.universiteitleiden.nl/` (or your Leiden login portal)
   - Log in with your username and password

2. **Navigate to Multi-Factor Authentication Settings**
   - Look for **"Multi-Factor Authentication"** or **"MFA"** in the menu
   - Click on it

3. **Select "Non-NetIQ Authenticator"**
   - Find the option for **"Non-NetIQ Authenticator"** or **"Authenticator App"**
   - Click **"Enroll"** or **"Modify"**

4. **Reveal the Secret Key**
   - You'll see a QR code and a secret key
   - Look for an **eye icon (👁️)** or **"Show"** button
   - **Click it** to reveal the secret key text
   - The secret key should now be visible (a long string like `JBSWY3DPEHPK3PXP...`)

5. **Extension Auto-Detects!**
   - The extension will **automatically detect** the secret key
   - You'll see a **green notification** in the top-right corner:
     - "Secret key detected and saved! Extension is ready for fully automated login."
   - The extension automatically saves it

6. **Verify It Worked**
   - Go to Extension Settings (click extension icon → Settings)
   - You should see a green box saying: **"✅ Secret Key Detected and Saved!"**
   - The secret key (first 8 characters) should be displayed

**✅ Done!** Your secret key is now saved and ready to use.

---

### Step 4: Manual Secret Key Entry (If Auto-Detection Doesn't Work)

If the automatic detection didn't work, you can manually enter the secret key:

1. **Get Your Secret Key**
   - Follow steps 1-4 from Step 3 above
   - **Copy the secret key** manually (select text and Ctrl+C / Cmd+C)
   - It should look like: `JBSWY3DPEHPK3PXP` or longer

2. **Enter in Settings**
   - Go to Extension Settings (click extension icon → Settings)
   - Find the text field: **"TOTP Secret Key"**
   - **Paste your secret key** into this field
   - You can paste:
     - Just the secret: `JBSWY3DPEHPK3PXP`
     - Or the full otpauth URL: `otpauth://totp/...?secret=JBSWY3DPEHPK3PXP`
   - The extension will extract the secret automatically

3. **Save Settings**
   - Click **"Save Settings"**
   - You should see: "Settings saved successfully!"

---

## Part 3: Configure Settings (Optional)

### Step 5: Configure Extension Settings

1. **Open Extension Settings**
   - Click the extension icon in Edge toolbar
   - Click **"Settings"** button

2. **Basic Settings** (should be checked by default)
   - ✅ **Enable automation**: Make sure checkbox is checked
   - ✅ **Auto-advance after selection**: Check this box
   - ✅ **Auto-fill and submit TOTP code**: Check this box

3. **Optional: Enable Credential Auto-Fill**
   - ✅ Check **"Auto-fill login credentials (Optional)"**
   - Enter your **Username** (Leiden University username)
   - Enter your **Password** (Leiden University password)
   - **Note**: Credentials are stored locally and encrypted

4. **Click "Save Settings"**
   - You should see a green message: "Settings saved successfully!"

---

## Part 4: Using the Extension (Fully Automated!)

### Step 6: Fully Automated Login Flow

Once your secret key is set up, the extension handles **everything automatically**:

1. **Visit Any Leiden Login Page**
   - Go to any Leiden University service that requires login
   - Example: `https://mfa.services.universiteitleiden.nl/...`

2. **If Credential Auto-Fill is Enabled:**
   - ✅ Extension automatically fills username
   - ✅ Extension automatically fills password
   - ✅ Extension automatically clicks Login/Submit
   - **No action needed from you!**

3. **If Credential Auto-Fill is NOT Enabled:**
   - Enter your username and password manually
   - Click Login/Submit

4. **Extension Handles MFA Automatically:**
   - ✅ Automatically selects **"Non-NetIQ Authenticator"** method
   - ✅ Automatically clicks **"Next"**
   - ✅ Automatically generates the current TOTP code
   - ✅ Automatically fills the code
   - ✅ Automatically clicks Submit/Verify
   - **No user interaction needed!**

5. **You're Logged In!**
   - The extension completes the entire flow automatically
   - You should be redirected to the service you were logging into
   - **That's it!** No copying codes, no manual entry, nothing!

---

## Part 5: Managing the Extension

### Step 7: Enable/Disable Extension

1. **Quick Toggle**
   - Click the extension icon in toolbar
   - Click **"Enable"** or **"Disable"** button
   - Status will update immediately

2. **Check Status**
   - Extension icon popup shows:
     - **"Automation is ENABLED"** (green) - Extension is active
     - **"Automation is DISABLED"** (red) - Extension is inactive

---

### Step 8: Update Settings

1. **Open Settings**
   - Click extension icon → Settings

2. **Modify Any Setting**
   - Change secret key
   - Enable/disable auto-advance
   - Update credentials
   - Enable/disable credential auto-fill

3. **Save Changes**
   - Click **"Save Settings"**
   - Settings apply immediately
   - You may need to refresh MFA pages for changes to take effect

---

## Part 6: Troubleshooting

### Problem: Extension Not Working

**Solution:**
1. Check if extension is enabled (click icon → should say "ENABLED")
2. Verify settings are saved (go to Settings → check all checkboxes)
3. Make sure secret key is configured (check Settings page)
4. Refresh the MFA page (F5 or Ctrl+R)
5. Check browser console for errors (F12 → Console tab)

---

### Problem: Secret Key Not Detected

**Solution:**
1. Make sure you clicked the **eye icon** to reveal the secret key
2. Verify the secret key is **visible** on the page (not hidden)
3. Try manually entering it in settings (Step 4)
4. Check that the secret key is a valid base32 string (A-Z, 2-7, =)

---

### Problem: TOTP Code Not Generating

**Solution:**
1. Verify secret key is saved in settings
2. Check that secret key is valid (base32 format, 16+ characters)
3. Try refreshing the page
4. Check browser console (F12) for error messages
5. Make sure "Auto-fill and submit TOTP code" is checked in settings

---

### Problem: Credentials Not Auto-Filling

**Solution:**
1. Verify **"Auto-fill login credentials"** is checked in settings
2. Make sure username and password are entered in settings
3. Check that you're on a Leiden login page
4. Try manually entering credentials once, then refresh

---

### Problem: Extension Icon Not Visible

**Solution:**
1. Click the **puzzle piece (🧩)** icon in Edge toolbar
2. Find "Leiden MFA Auto-Pass" in the list
3. Click the **pin icon** to pin it to toolbar
4. The icon should now be visible

---

## Part 7: Quick Reference

### Keyboard Shortcuts

- **Refresh Page**: F5 or Ctrl+R
- **Open Console**: F12
- **Extensions Page**: `edge://extensions/`

### Important URLs

- **Extensions Page**: `edge://extensions/`
- **Leiden Login**: `https://mfa.services.universiteitleiden.nl/...`
- **Account Services**: `https://accountservices.universiteitleiden.nl/`

### Settings Checklist

Before using the extension, verify:

- ✅ Extension is installed and enabled
- ✅ "Enable automation" is checked
- ✅ "Auto-advance after selection" is checked
- ✅ "Auto-fill and submit TOTP code" is checked
- ✅ Secret key is configured (auto-detected or manually entered)
- ✅ Credentials are set up (if using credential auto-fill)

---

## Part 8: Security Best Practices

1. **Keep Extension Updated**
   - Check for updates regularly
   - Re-download if you update the code

2. **Secure Your Secret Key**
   - Don't share your secret key with anyone
   - Only enable credential auto-fill on trusted devices
   - Use strong passwords

3. **Monitor Extension Activity**
   - Check browser console for any errors
   - Verify extension is working as expected
   - Disable if you notice unusual behavior

4. **Backup Your Secret Key**
   - Save your secret key in a secure password manager
   - Don't rely solely on extension storage

---

## 🎉 You're All Set!

The extension is now fully configured and ready to use. It will **automatically handle all authentication steps** - no user interaction needed!

**How It Works:**
1. Visit any Leiden login page
2. Extension auto-fills credentials (if enabled)
3. Extension auto-selects Authenticator method
4. Extension auto-generates TOTP code
5. Extension auto-fills and submits
6. **You're logged in!**

**No copying codes, no manual entry, no interaction needed!** 🚀

---

## Summary

- **Installation**: Load extension in Edge Developer Mode
- **Setup**: Auto-detect or manually enter secret key (one-time)
- **Usage**: Visit login page → Extension handles everything automatically
- **Result**: Fully automated login with zero user interaction!

Enjoy your fully automated login experience! 🎊
