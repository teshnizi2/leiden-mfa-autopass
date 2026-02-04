# Visual Setup Guide

This guide shows how to get your TOTP secret key from Leiden University and configure the extension.  
**Estimated time: ~10 minutes.**

---

## What You Need

- Leiden University account
- Leiden MFA Auto-Pass extension installed in your browser
- About 10 minutes

---

## Step 1 — Open Leiden Identity Manager

**URL:** https://account.services.universiteitleiden.nl/idmdash/#/landing

Open the link and sign in if prompted. You’ll see the Identity Manager dashboard.

![Step 1 — Dashboard](docs/screenshots/image1.jpg)

**Action:** Find **Multi-Factor Authentication** and click it to open MFA settings.

---

## Step 2 — Choose TOTP Non-NetIQ Authenticator

You’ll see a list of authentication methods. Select the one that works with this extension.

![Step 2 — Select authenticator](docs/screenshots/image2.jpg)

**Action:** Find **TOTP Non-NetIQ Authenticator** and click **Enroll** (first time) or **Modify** (if already set up).

---

## Step 3 — Copy Your Secret Key

After Enroll/Modify, the next page shows your secret key.

![Step 3 — Secret key](docs/screenshots/image3.jpg)

**Action:**

1. Locate the **secret key** (long string of letters and numbers).
2. Copy the **entire** secret key.
3. Keep this tab open; you’ll need it again in Step 5 to complete enrollment.

---

## Step 4 — Paste the Secret into the Extension

Open the extension’s settings (extension icon → **Open Settings**, or from the browser’s extensions page → **Extension options**).

![Step 4 — Extension settings](docs/screenshots/image4.jpg)

**Action:**

1. Find the **TOTP Secret Key** field.
2. Paste the secret key you copied in Step 3.
3. The settings page will show a live 6-digit code (see Step 5).

---

## Step 5 — Complete Enrollment Using the Generated Code

After you paste the secret, the extension shows the current TOTP code in a purple box.

![Step 5 — TOTP code](docs/screenshots/image5.jpg)

**What you see:**

- 6-digit TOTP code
- Countdown until the next code
- Progress bar

**Action:**

1. Note the **6-digit code** in the extension settings.
2. Switch back to the **Leiden enrollment tab** (from Step 3).
3. Enter this 6-digit code in the verification field.
4. Click **Next** on the Leiden page to finish enrollment.
5. In the extension, click **Save Settings**.

---

## You’re Done

Setup is complete. From now on:

1. Close all browser windows once (to clear the session lock).
2. When you go to a Leiden service that requires login, the extension will:
   - Choose “Code from non-NetIQ Authenticator”
   - Generate the TOTP code
   - Fill the code field and submit

You should be logged in without typing a code.

---

## Quick Reference

| Step | Action | Screenshot |
|------|--------|------------|
| 1 | Open Identity Manager | [image1.jpg](docs/screenshots/image1.jpg) |
| 2 | Select TOTP Non-NetIQ Authenticator | [image2.jpg](docs/screenshots/image2.jpg) |
| 3 | Copy secret key | [image3.jpg](docs/screenshots/image3.jpg) |
| 4 | Paste in extension settings | [image4.jpg](docs/screenshots/image4.jpg) |
| 5 | Use generated code to complete | [image5.jpg](docs/screenshots/image5.jpg) |

---

## Tips

- **Verify:** After pasting, compare the extension’s code with your phone authenticator app; they should match.
- **Save:** Always click **Save Settings** in the extension after pasting the secret.
- **Secret:** Treat the secret key like a password; don’t share it.

---

## Troubleshooting

| Issue | What to try |
|-------|-------------|
| No 6-digit code in extension | Ensure you copied the full secret and that it’s valid Base32 (A–Z, 2–7). Paste again. |
| Code rejected on Leiden page | Codes change every 30 seconds. Enter the code quickly or wait for the next one. |
| Can’t find Multi-Factor Authentication | Confirm you’re signed in and use the [Identity Manager link](https://account.services.universiteitleiden.nl/idmdash/#/landing). If it’s still missing, contact Leiden IT. |

---

For more detail, see [INSTALL.md](INSTALL.md) and [DETAILED_USAGE_GUIDE.md](DETAILED_USAGE_GUIDE.md).  
To report bugs or ask questions, [open an issue](https://github.com/teshnizi2/leiden-mfa-autopass/issues) on GitHub.
