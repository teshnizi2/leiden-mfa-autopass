# Leiden MFA Auto-Pass

Automate Leiden University’s two-factor login. **One-time setup (~10 min)** — then the extension fills and submits the code for you.

**Works in:** Edge, Chrome, Brave, Opera · **Works on:** Windows, Mac, Linux

---

## Full setup guide

| Step | What you do |
|------|-------------|
| [1](#step-1--download) | Download |
| [2](#step-2--install-the-extension) | Install the extension |
| [3](#step-3--get-your-secret-key-from-leiden) | Get your secret key from Leiden |
| [4](#step-4--configure-the-extension) | Configure the extension |
| [5](#step-5--youre-done) | You’re done |

---

### Step 1 — Download

1. Click the green **Code** button above → **Download ZIP**.
2. Unzip the file on your computer.

---

### Step 2 — Install the extension

1. Open your browser’s extensions page:
   - **Edge:** type `edge://extensions/` in the address bar  
   - **Chrome:** `chrome://extensions/`  
   - **Brave:** `brave://extensions/`  
   - **Opera:** `opera://extensions/`

2. Turn **Developer mode** on (toggle at the bottom).

3. Click **Load unpacked**.

4. Select the **`extension`** folder (inside the folder you unzipped — it contains `manifest.json`).

5. **Leiden MFA Auto-Pass** should appear in the list and be enabled.

---

### Step 3 — Get your secret key from Leiden

1. Open **[Leiden Identity Manager](https://account.services.universiteitleiden.nl/idmdash/#/landing)** and sign in.

2. Open the **Multi-Factor Authentication** section.

   ![Dashboard](docs/screenshots/image1.jpg)

3. Find **TOTP Non-NetIQ Authenticator** and click **Enroll** (first time) or **Modify** (if you already use it).

   ![Select authenticator](docs/screenshots/image2.jpg)

4. On the next page, **copy the secret key** (the long string of letters and numbers). Keep this tab open for Step 5.

   ![Secret key](docs/screenshots/image3.jpg)

---

### Step 4 — Configure the extension

1. Open the extension: click its icon in the toolbar → **Open Settings** (or open the extensions page and click **Extension options** for Leiden MFA Auto-Pass).

2. Paste your secret key into **TOTP Secret Key**.

   ![Settings](docs/screenshots/image4.jpg)

3. A **6-digit code** will appear below and update every 30 seconds.

   ![TOTP code](docs/screenshots/image5.jpg)

4. If Leiden is still asking for a code to finish enrollment: switch to the Leiden tab, enter the 6-digit code from the extension, and click **Next**.

5. Back in the extension, click **Save Settings**.

6. *(Optional)* To auto-fill your Leiden username and password on the login page, enable **Auto-fill credentials** and enter them, then save again.

---

### Step 5 — You’re done

1. Go to any Leiden login page (e.g. [login.leidenuniv.nl](https://login.leidenuniv.nl/)).

2. Sign in with your username and password (or let the extension fill them if you turned that on).

3. The extension will choose “Code from non-NetIQ Authenticator”, generate the code, fill it in, and submit. You should be logged in without typing a code.

The extension only runs once per browser session on the code step to avoid lockouts. To run it again in the same session, close all browser windows and open a new one.

---

## Summary

| Step | What you do | Time |
|------|-------------|------|
| 1 | Download ZIP and unzip | ~1 min |
| 2 | Load the `extension` folder in your browser | ~2 min |
| 3 | Get secret key from Leiden Identity Manager | ~3 min |
| 4 | Paste secret in extension, save, complete enrollment if needed | ~2 min |
| 5 | Log in to a Leiden site — extension does the rest | ~2 min |

**Total: about 10 minutes.**

---

## License

MIT. Not affiliated with Leiden University. Use at your own risk; keep a backup 2FA method (e.g. your phone app).  
Inspired by [AutoULCN](https://github.com/kooroshkz/AutoULCN).
