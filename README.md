# Leiden MFA Auto-Pass

![Version](https://img.shields.io/badge/version-2.0.5-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Setup](https://img.shields.io/badge/setup-~10%20min-blue)

Browser extension for **Leiden University** that automates two-factor authentication using TOTP. One-time setup; afterward, login completes without entering codes manually.

---

## Features

- **Fully automated** — Selects the correct auth method, generates the code, and submits it.
- **Secure** — TOTP secret is stored only in your browser; nothing is sent to external servers.
- **Session-safe** — Single attempt per session to avoid lockouts.
- **Live verification** — Settings page shows the current TOTP code so you can confirm it matches your app.

**Supported browsers:** Edge, Chrome, Brave, Opera, Vivaldi, Arc (any Chromium-based browser). Not compatible with Firefox or Safari.  
**Works on:** Windows, macOS, and Linux — same installation steps on all platforms.

---

## Quick Start

**Estimated setup time: ~10 minutes.**

1. **Download** — Use the green **Code** button → **Download ZIP**, then unzip.
2. **Install** — Open `edge://extensions/` (or `chrome://extensions/`, etc.), turn on **Developer mode**, click **Load unpacked**, and select the `extension` folder.
3. **Configure** — Open the extension’s **Options**, paste your TOTP secret key (see [how to get it](#getting-your-totp-secret-key)), then click **Save Settings**.
4. **Use** — Go to a Leiden login page; the extension will handle 2FA automatically.

Full step-by-step instructions: [INSTALL.md](INSTALL.md).

---

## Getting Your TOTP Secret Key

You need the TOTP secret from Leiden’s Identity Manager (one-time setup).

1. Open **[Leiden Identity Manager](https://account.services.universiteitleiden.nl/idmdash/#/landing)**.
2. Go to **Multi-Factor Authentication**.
3. Choose **TOTP Non-NetIQ Authenticator** → **Enroll** or **Modify**.
4. Copy the secret key (long Base32 string, e.g. `JBSWY3DPEHPK3PXP...`).
5. Paste it into the extension’s **TOTP Secret Key** field and save. The settings page will show a live 6-digit code; use it to complete enrollment if prompted.

**Visual guide with screenshots:** [VISUAL_SETUP_GUIDE.md](VISUAL_SETUP_GUIDE.md).

---

## How It Works

On Leiden MFA pages, the extension:

1. **Login** — Optionally fills username/password and submits.
2. **Method selection** — Chooses “Code from non-NetIQ Authenticator” and continues.
3. **Code entry** — Generates the TOTP code, fills the field, and submits.

It runs **once per browser session** on the code-entry step to prevent repeated attempts and lockouts.

---

## Privacy & Security

- Data is stored **only in your browser** (e.g. via `chrome.storage`).
- No telemetry, analytics, or external API calls for your secret or codes.
- Open source; you can review the code in this repository.

---

## Configuration

In the extension **Options** you can set:

- **Enable/disable** automation.
- **TOTP Secret Key** (required).
- **Auto-fill credentials** (optional): Leiden username and password for the first login step.

---

## Troubleshooting

| Issue | What to try |
|-------|-------------|
| Extension does nothing | Ensure it’s enabled in Options and you’re on a Leiden MFA page. Check the browser console (F12) for errors. |
| Wrong or rejected code | Confirm the secret in Options matches Leiden. Check that the live code in the settings matches your authenticator app and that your system clock is correct. |
| Account locked | Wait 15–30 minutes or contact Leiden IT. The extension is designed to attempt only once per session to reduce lockout risk. |

More detail: [DETAILED_USAGE_GUIDE.md](DETAILED_USAGE_GUIDE.md).

---

## Documentation

| Document | Description |
|----------|-------------|
| [INSTALL.md](INSTALL.md) | Step-by-step installation and configuration (~10 min). |
| [VISUAL_SETUP_GUIDE.md](VISUAL_SETUP_GUIDE.md) | Setup with screenshots. |
| [DETAILED_USAGE_GUIDE.md](DETAILED_USAGE_GUIDE.md) | Usage, options, and troubleshooting. |
| [CHANGELOG.md](CHANGELOG.md) | Version history. |
| [CONTRIBUTING.md](CONTRIBUTING.md) | How to contribute. |

---

## Project Structure

```
extension/
├── manifest.json       # Extension manifest
├── background.js       # Service worker (TOTP generation)
├── content-script.js   # Page automation
├── totp-simple.js      # TOTP implementation
├── options.html / .js  # Settings UI
├── popup.html / .js    # Toolbar popup
└── icons/              # Extension icons
```

---

## License & Disclaimer

**License:** MIT. See [LICENSE](LICENSE).

This project is not affiliated with Leiden University. Use at your own risk. Keep a backup 2FA method (e.g. your phone app) configured.

Inspired by [AutoULCN](https://github.com/kooroshkz/AutoULCN).
