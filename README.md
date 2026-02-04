# 🔐 Leiden MFA Auto-Pass Extension

![Version](https://img.shields.io/badge/version-2.0.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Browser](https://img.shields.io/badge/browser-Edge%20%7C%20Chrome%20%7C%20Brave-orange)

Automatically handle Leiden University's two-factor authentication using TOTP codes.

**No more typing codes!** This extension automatically fills in your 2FA codes and completes the login process for you.

## ✨ Features

- 🚀 **Fully automated** - Zero interaction needed
- 🔒 **Secure** - TOTP secret stored locally in your browser
- ⚡ **Fast** - Completes login in seconds
- 🎯 **One-time attempt** - Never locks your account
- 🧪 **Built-in testing** - Verify your TOTP codes

## 📋 Requirements

- **Chromium-based browser** (Edge, Chrome, Brave, Opera, Vivaldi, Arc, etc.)
  - ❌ Does NOT work on Firefox or Safari
- Leiden University account with 2FA enabled
- TOTP authenticator app (Google Authenticator, Microsoft Authenticator, etc.)

## 📺 Demo

The extension automatically handles all three steps:
1. ✅ **Login page** - Fills username/password (optional)
2. ✅ **Authentication selection** - Selects "non-NetIQ Authenticator"
3. ✅ **Code entry** - Generates and submits TOTP code

**Result:** Logged in within seconds, zero interaction needed! 🚀

## 🚀 Quick Start

### Installation

1. **Download the extension:**
   - Click the green "**< > Code**" button above → "**Download ZIP**"
   - Unzip the downloaded file

2. **Load in your browser:**
   - **Edge:** Open `edge://extensions/`
   - **Chrome:** Open `chrome://extensions/`
   - **Brave:** Open `brave://extensions/`
   - **Opera:** Open `opera://extensions/`
   - Turn ON "Developer mode" (bottom-left toggle)
   - Click "Load unpacked"
   - Select the `extension` folder
   - The extension is now installed!

3. **Configure:**
   - Click "Extension options"
   - Enter your TOTP secret key (see setup guide below)
   - (Optional) Enable auto-fill for username/password
   - Click "Save Settings"

4. **Test:**
   - Go to https://login.leidenuniv.nl/
   - The extension will automatically handle the 2FA!

## 🔑 Finding Your TOTP Secret Key

You need the **secret key** from when you set up 2FA with Leiden.

### Option 1: From authenticator app

**Google Authenticator:**
1. Open app → Tap 3 dots → "Transfer accounts" → "Export accounts"
2. Select Leiden University
3. Take screenshot of QR code
4. Use QR code reader to decode and extract the secret

**Other apps:** Most don't show the secret directly.

### Option 2: Re-register 2FA

1. Contact Leiden IT support or go to https://password.leidenuniv.nl/
2. Register a new authenticator: "Code from non-NetIQ Authenticator"
3. When you see the QR code, **copy the text below it** (the secret)
4. Paste that secret into the extension settings
5. Also scan the QR with your authenticator app

The secret looks like: `JBSWY3DPEHPK3PXPJBSWY3DP` (16-32 uppercase characters)

## 🧪 Testing Your Setup

Open the built-in test page to verify your TOTP codes:

1. Go to `edge://extensions/`
2. Find the extension folder location
3. Open `test-totp.html` in your browser
4. Compare the generated code with your authenticator app
5. They should match!

## 📖 How It Works

The extension automatically handles all three steps of Leiden's login:

1. **Login page** → Auto-fills username/password (optional) and clicks Login
2. **Chain selection** → Selects "Code from non-NetIQ Authenticator" and clicks Next
3. **Code entry** → Generates TOTP code, fills it, and clicks Submit

**Important:** The extension attempts **once per session** to prevent account lockouts.

## 🔒 Privacy & Security

- ✅ All data stored **locally** in your browser
- ✅ No external servers or cloud services
- ✅ TOTP secret never leaves your device
- ✅ Open source - review the code yourself
- ✅ No tracking or analytics

## ⚙️ Configuration Options

Open extension settings to configure:

- **Enable Extension** - Turn automation on/off
- **TOTP Secret Key** - Your 2FA secret (required)
- **Auto-Fill Credentials** - Automatically fill username/password
- **Username** - Your Leiden username (optional)
- **Password** - Your Leiden password (optional)

## 🛠️ Troubleshooting

### Extension doesn't run

- Check that it's enabled in extension settings
- Make sure you're on a Leiden University page
- Check console logs (F12 → Console tab)

### Wrong TOTP code

- Use the test page (`test-totp.html`) to verify your secret
- Compare with your authenticator app
- Make sure your computer clock is accurate
- Re-enter your secret key in extension settings

### Account locked

- Wait 15-30 minutes
- Or contact Leiden IT support
- The extension has built-in lockout prevention

### Codes don't match

Your secret key is wrong. Follow the "Finding Your TOTP Secret Key" guide above.

## 📁 Project Structure

```
extension/
├── manifest.json           # Extension configuration
├── background.js          # Service worker (TOTP generation)
├── content-script.js      # Main automation logic
├── totp-simple.js        # TOTP algorithm implementation
├── options.html          # Settings page
├── options.js            # Settings logic
├── icon48.png           # Extension icons
├── icon128.png
└── test-totp.html       # Testing utility
```

## 🤝 Contributing

Found a bug? Have a suggestion? 

1. Open an issue
2. Submit a pull request
3. Share your improvements!

## 📄 License

MIT License - Feel free to use and modify!

## ⚠️ Disclaimer

This extension is provided as-is for convenience. Use at your own risk. Always keep backup 2FA methods configured. Not officially affiliated with Leiden University.

## 🙏 Credits

Inspired by [AutoULCN](https://github.com/kooroshkz/AutoULCN)

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

- 🐛 Found a bug? [Open an issue](../../issues)
- 💡 Have a feature idea? [Start a discussion](../../discussions)
- 🔧 Want to contribute? [Submit a pull request](../../pulls)

## ⭐ Star This Project

If you find this extension helpful, please star the repository! It helps others discover it.

## 📞 Support

- 📖 [Installation Guide](INSTALL.md)
- 📚 [Detailed Usage Guide](DETAILED_USAGE_GUIDE.md)
- 🐛 [Report an Issue](../../issues)
- 💬 [Discussions](../../discussions)

---

**Made with ❤️ for Leiden University students and staff**
