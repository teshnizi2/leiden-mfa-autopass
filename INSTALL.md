# 📦 Installation Guide

Quick guide for installing the Leiden MFA Auto-Pass extension.

## 🚀 Step-by-Step Installation

### 1. Download the Extension

**Option A: From GitHub**
- Go to the GitHub repository
- Click the green "Code" button
- Click "Download ZIP"
- Unzip the downloaded file

**Option B: From Shared ZIP**
- Download the `extension.zip` file from the link you received
- Unzip the file to a folder on your computer

### 2. Install in Your Browser

Works with all Chromium browsers: Edge, Chrome, Brave, Opera, Vivaldi, Arc

1. **Open Extensions page:**
   - **Edge:** Type `edge://extensions/` in address bar
   - **Chrome:** Type `chrome://extensions/` in address bar
   - **Brave:** Type `brave://extensions/` in address bar
   - **Opera:** Type `opera://extensions/` in address bar
   - Press Enter

2. **Enable Developer Mode:**
   - Look for "Developer mode" toggle (bottom-left corner)
   - Turn it **ON** (slide to the right)

3. **Load the Extension:**
   - Click the "Load unpacked" button (top-left)
   - Browse to the folder where you unzipped the files
   - Select the `extension` folder (the one containing `manifest.json`)
   - Click "Select Folder"

4. **Verify Installation:**
   - You should see "Leiden MFA Auto-Pass" appear in your extensions list
   - It should show as "Enabled"

### 3. Configure the Extension

1. **Open Settings:**
   - Find "Leiden MFA Auto-Pass" in the extensions list
   - Click "Extension options" or "Details" → "Extension options"

2. **Enter Your TOTP Secret:**
   - In the "TOTP Secret Key" field, paste your secret
   - The secret is a long string like: `JBSWY3DPEHPK3PXPJBSWY3DP`
   - (See below for how to find this)

3. **(Optional) Enable Auto-Fill:**
   - If you want the extension to fill your username/password:
     - Check "Auto-fill credentials on login page"
     - Enter your username
     - Enter your password
   - **Note:** This is optional and stored locally

4. **Save:**
   - Click "Save Settings"
   - You should see "Settings saved successfully!"

### 4. Test the Extension

1. **Go to Leiden login page:**
   - https://login.leidenuniv.nl/ (or any Leiden service)

2. **Watch it work:**
   - The extension will automatically handle the 2FA
   - Open console (F12) to see detailed logs

3. **Verify:**
   - You should be logged in automatically!

## 🔑 How to Find Your TOTP Secret

You need the secret key from your 2FA setup. Here are the ways to get it:

### Method 1: From Google Authenticator

1. Open Google Authenticator
2. Tap the **3 dots** (⋮) menu → "Transfer accounts" → "Export accounts"
3. Select "Leiden University"
4. Screenshot the QR code shown
5. Use an online QR code decoder (Google "QR code decoder")
6. Upload your screenshot
7. Look for text like: `otpauth://totp/...?secret=XXXXX`
8. Copy the `XXXXX` part (that's your secret)

### Method 2: From Your Records

When you set up 2FA, Leiden showed you:
- A QR code to scan
- Text below it (the secret key)

Check if you:
- Saved it in your password manager
- Wrote it down
- Took a screenshot
- Saved it in notes

### Method 3: Register New Authenticator

If you can't find your secret:

1. **Go to:** https://password.leidenuniv.nl/ (or contact IT support)
2. **Register new method:** "Code from non-NetIQ Authenticator"
3. **When you see the QR code:**
   - **COPY the text below the QR code** (this is your secret!)
   - Paste it into the extension settings
   - Also scan the QR with your authenticator app
4. **Save both** (app and extension now have the same secret)

**Important:** You can have multiple authenticators registered!

## 🧪 Test Your Secret

The extension settings page includes a live TOTP code display:

1. Open the extension options page
2. Enter your TOTP secret key
3. A live 6-digit code will appear below the input field
4. The code updates every 30 seconds automatically
5. Compare with your authenticator app
6. **The codes should match!**

If they don't match, your secret is wrong.

## ✅ Installation Complete!

You're all set! The extension will now automatically handle Leiden's 2FA.

**Important Notes:**
- The extension attempts **once per session** (prevents lockouts)
- To reset, close all browser windows
- Your secret is stored locally (never sent anywhere)
- Keep your authenticator app as backup!

## ❓ Need Help?

- Check the [README](README.md) for full documentation
- See [Troubleshooting Guide](DETAILED_USAGE_GUIDE.md)
- Open an issue on GitHub
- Check console logs (F12 → Console) for errors

---

**Enjoy automatic 2FA! 🎉**
