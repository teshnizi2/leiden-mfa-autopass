# Detailed Usage Guide

This guide covers installation, configuration, daily use, and troubleshooting for **Leiden MFA Auto-Pass**.  
**First-time setup: ~10 minutes.**

---

## 1. Installation

### 1.1 Get the extension

- Download the repo as ZIP (Code → Download ZIP) and unzip, or clone the repository.
- You need the **`extension`** folder (the one containing `manifest.json`).

### 1.2 Load in your browser

1. Open the extensions page: `edge://extensions/`, `chrome://extensions/`, or equivalent.
2. Turn **Developer mode** on.
3. Click **Load unpacked** and select the **`extension`** folder.
4. Confirm **Leiden MFA Auto-Pass** appears and is enabled.

Supported: Edge, Chrome, Brave, Opera, Vivaldi, Arc. Not supported: Firefox, Safari.

---

## 2. One-time setup (~10 minutes)

### 2.1 Get your TOTP secret key

1. Go to [Leiden Identity Manager](https://account.services.universiteitleiden.nl/idmdash/#/landing).
2. Open **Multi-Factor Authentication**.
3. Choose **TOTP Non-NetIQ Authenticator** → **Enroll** or **Modify**.
4. Copy the **secret key** (long Base32 string). Keep the tab open to complete enrollment.

Step-by-step with screenshots: [VISUAL_SETUP_GUIDE.md](VISUAL_SETUP_GUIDE.md).

### 2.2 Configure the extension

1. Open the extension **Options** (toolbar icon → Open Settings, or from the extensions page).
2. Paste the secret key into **TOTP Secret Key** and click **Save Settings**.
3. A live 6-digit code will appear; use it on the Leiden page to finish enrollment if asked.
4. (Optional) Enable **Auto-fill credentials** and enter your Leiden username and password.

---

## 3. Using the extension

### 3.1 Normal login flow

1. Go to a Leiden login page (e.g. [login.leidenuniv.nl](https://login.leidenuniv.nl/)).
2. If auto-fill is enabled, the extension can fill username/password and submit; otherwise sign in yourself.
3. On the MFA step, the extension will:
   - Select **Code from non-NetIQ Authenticator**
   - Generate the TOTP code
   - Fill the code field and submit
4. You should be logged in without typing a code.

The extension runs **once per session** on the code step to avoid lockouts. To “reset” and allow another attempt, close all windows for that browser and start a new session.

### 3.2 Enabling or disabling

- Click the extension icon. Use the button to **Enable** or **Disable** automation. The popup shows the current status.

### 3.3 Changing settings

- Open **Options** from the extension icon or the extensions page. Change the secret key, credentials, or auto-fill options, then click **Save Settings**. You may need to refresh the Leiden tab for changes to apply.

---

## 4. Verifying your setup

The extension **Options** page shows the **current TOTP code** next to your secret key. Use it to confirm configuration:

1. Open extension **Options** and ensure your secret is saved.
2. Check that the 6-digit code and countdown match what you expect.
3. Compare with your phone authenticator app (e.g. Google Authenticator). The codes should match. If not, re-enter the secret from Leiden Identity Manager.

---

## 5. Troubleshooting

| Issue | What to try |
|-------|-------------|
| Extension does nothing on Leiden page | Ensure it’s enabled in the popup and that you’re on a Leiden MFA page. Reload the page. Check the browser console (F12 → Console) for errors. |
| Wrong or rejected TOTP code | Confirm the secret in Options is correct and complete. Check system time (TOTP is time-based). Compare the extension’s live code with your phone app. |
| Account locked | Wait 15–30 minutes or contact Leiden IT. The extension is designed to attempt only once per session to reduce lockout risk. |
| Credentials not auto-filled | Ensure **Auto-fill credentials** is enabled and username/password are set in Options. Confirm you’re on the correct Leiden login page. |
| Extension icon not visible | Use the browser’s puzzle-piece (or similar) menu to find **Leiden MFA Auto-Pass** and pin it to the toolbar. |

---

## 6. Security and best practices

- **Secret key:** Stored only in your browser; not sent to external servers. Treat it like a password; don’t share it.
- **Credentials:** If you use auto-fill, only enable it on a trusted device. Use a strong password.
- **Backup:** Keep a second 2FA method (e.g. your phone app) so you can still sign in if the extension or device is unavailable.
- **Updates:** When you update the extension (e.g. re-download from GitHub), reload it from the extensions page.

---

## 7. Quick reference

| Item | Value |
|------|--------|
| Setup time | ~10 minutes (one-time) |
| Extensions page | `edge://extensions/` or `chrome://extensions/` |
| Leiden Identity Manager | [idmdash/#/landing](https://account.services.universiteitleiden.nl/idmdash/#/landing) |
| Behavior | One attempt per session on code step |

---

For installation only, see [INSTALL.md](INSTALL.md).  
For a visual walkthrough with screenshots, see [VISUAL_SETUP_GUIDE.md](VISUAL_SETUP_GUIDE.md).  
For bugs or feature requests, [open an issue](https://github.com/teshnizi2/leiden-mfa-autopass/issues) on GitHub.
