# Installation Guide

This guide walks you through installing and configuring **Leiden MFA Auto-Pass**.  
**Estimated time: ~10 minutes.**

---

## What You Need

- A Chromium-based browser (Edge, Chrome, Brave, Opera, Vivaldi, or Arc)
- A Leiden University account with access to Identity Manager
- About 10 minutes for one-time setup

The extension works on **Windows, macOS, and Linux**; installation is the same on all platforms.

---

## Step 1 — Download the Extension

1. Open the [repository](https://github.com/teshnizi2/leiden-mfa-autopass) on GitHub.
2. Click the green **Code** button, then **Download ZIP**.
3. Unzip the file to a folder on your computer (e.g. `Downloads/leiden-mfa-autopass-main`).

If someone shared a ZIP with you, unzip that file instead.

---

## Step 2 — Load the Extension in Your Browser

1. Open the extensions page:
   - **Edge:** `edge://extensions/`
   - **Chrome:** `chrome://extensions/`
   - **Brave:** `brave://extensions/`
   - **Opera:** `opera://extensions/`

2. Turn **Developer mode** on (toggle in the bottom-left).

3. Click **Load unpacked**.

4. In the file dialog, open the folder you unzipped and select the **`extension`** folder (the one that contains `manifest.json`).

5. Confirm that **Leiden MFA Auto-Pass** appears in the list and is enabled.

---

## Step 3 — Get Your TOTP Secret Key

You need the TOTP secret from Leiden’s Identity Manager (one-time).

1. Go to **[Leiden Identity Manager](https://account.services.universiteitleiden.nl/idmdash/#/landing)** and sign in if needed.

2. Open the **Multi-Factor Authentication** section.

3. Find **TOTP Non-NetIQ Authenticator** and click **Enroll** (first time) or **Modify** (if already enrolled).

4. On the next page, copy the **secret key** (long Base32 string, e.g. `JBSWY3DPEHPK3PXP...`).  
   Keep this tab open; you’ll use the extension’s code to complete enrollment.

**Visual guide with screenshots:** [VISUAL_SETUP_GUIDE.md](VISUAL_SETUP_GUIDE.md).

---

## Step 4 — Configure the Extension

1. Open the extension’s options:
   - Click the extension icon in the toolbar → **Open Settings**, or  
   - Go to the extensions page → find **Leiden MFA Auto-Pass** → **Extension options**.

2. In **TOTP Secret Key**, paste the secret you copied in Step 3.

3. A **live 6-digit code** will appear in the settings page. It updates every 30 seconds.  
   If Leiden asks for a code to finish enrollment, use this code and click **Next** on the Leiden page.

4. (Optional) To auto-fill your Leiden username and password on the login page:
   - Enable **Auto-fill credentials**.
   - Enter your **Username** and **Password**.

5. Click **Save Settings**.

---

## Step 5 — Verify

1. Go to a Leiden login page (e.g. [login.leidenuniv.nl](https://login.leidenuniv.nl/)).

2. Sign in as usual. The extension will:
   - Choose “Code from non-NetIQ Authenticator”
   - Generate the TOTP code
   - Fill the code field and submit

3. You should be logged in without typing a code yourself.

**Note:** The extension runs once per session on the code step to avoid lockouts. If you need to try again, close all windows for that browser and start a new session.

---

## Verifying Your Secret Key

The extension options page shows the **current TOTP code** next to your secret. Use it to confirm setup:

1. Open extension **Options** and ensure your secret is saved.
2. Check the 6-digit code and countdown.
3. Compare with the code in your phone authenticator app (e.g. Google Authenticator).  
   They should match. If not, re-paste the secret from Leiden Identity Manager.

![TOTP display in settings](docs/screenshots/image5.jpg)

---

## Summary

| Step | Action | Time |
|------|--------|------|
| 1 | Download and unzip | ~1 min |
| 2 | Load unpacked extension | ~2 min |
| 3 | Get TOTP secret from Leiden | ~3 min |
| 4 | Paste secret and save settings | ~2 min |
| 5 | Test login | ~2 min |

**Total: ~10 minutes.**

---

## Need Help?

- **Full setup with screenshots:** [VISUAL_SETUP_GUIDE.md](VISUAL_SETUP_GUIDE.md)
- **Usage and troubleshooting:** [DETAILED_USAGE_GUIDE.md](DETAILED_USAGE_GUIDE.md)
- **Bugs or questions:** [Open an issue](https://github.com/teshnizi2/leiden-mfa-autopass/issues) on GitHub
