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

## 🔑 How to Get Your TOTP Secret Key

### 📸 **[Complete Visual Guide with Screenshots →](VISUAL_SETUP_GUIDE.md)**

**Step-by-step with images showing exactly what to do!**

---

### Quick Text Guide:

1. **Go to Leiden Identity Manager:**
   ```
   https://account.services.universiteitleiden.nl/idmdash/#/landing
   ```

2. **Navigate to Multi-Factor Authentication:**
   - Find the "Multi-Factor Authentication" section
   - Click on it

3. **Select TOTP Non-NetIQ Authenticator:**
   - Look for "TOTP Non-NetIQ Authenticator"
   - Click **"Enroll"** (first time) or **"Modify"** (existing)

4. **Copy Your Secret Key:**
   - You'll see a page with your secret key
   - It's a long string like: `JBSWY3DPEHPK3PXPJBSWY3DP`
   - **Copy the entire key**

5. **Paste into Extension:**
   - Open extension settings
   - Paste into "TOTP Secret Key" field
   - A 6-digit code will appear in a purple box!

6. **Complete Enrollment:**
   - Use the generated 6-digit code to verify
   - Click "Next" on the Leiden page
   - Click "Save Settings" in the extension

**Done!** 🎉

---

### Alternative Methods:

#### Method 1: From Google Authenticator

1. Open Google Authenticator
2. Tap the **3 dots** → "Transfer accounts" → "Export accounts"
3. Screenshot the QR code
4. Use a QR code decoder to extract the secret

#### Method 2: From Your Records

Check if you saved it when setting up 2FA:
- Password manager
- Notes app
- Screenshot
- Written down

**Important:** You can have multiple authenticators registered!

## 🧪 Test Your Secret

The extension settings page includes a **beautiful live TOTP code display**:

1. Open the extension options page
2. Enter your TOTP secret key
3. **A live 6-digit code appears in a purple gradient box!** ✨
4. The code updates every 30 seconds with:
   - 📊 **Progress bar** showing time remaining
   - ⏱️ **Countdown timer**
   - 🔢 **Large, easy-to-read code**
5. Compare with your authenticator app
6. **The codes should match!**

![TOTP Display](docs/screenshots/image5.jpg)

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
