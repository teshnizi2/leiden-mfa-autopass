<p align="center">
  <img src="https://img.shields.io/badge/Leiden%20MFA%20Auto--Pass-v2.0.5-0078D4?style=for-the-badge" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-2ea043?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/setup-~15%20min-0078D4?style=for-the-badge" alt="Setup time" />
</p>

<h1 align="center">Leiden MFA Auto-Pass</h1>

<p align="center">
  <strong>Automate Leiden University two-factor login.</strong><br />
  One-time setup, then the extension fills and submits the TOTP code for you—no more copying from your phone.
</p>

<p align="center">
  <a href="#full-setup-guide">Setup guide</a> •
  <a href="#step-1--download">Download</a> •
  <a href="#author">Author</a>
</p>

---

## At a glance

| | |
|:---|:---|
| **Browsers** | Edge, Chrome, Brave, Opera (Chromium-based) |
| **Platforms** | Windows, macOS, Linux |
| **Method** | TOTP (Authenticator code only) |
| **Repository** | [github.com/teshnizi2/leiden-mfa-autopass](https://github.com/teshnizi2/leiden-mfa-autopass) |

---

## Full setup guide (~15Min)

Do this once. After that, visiting a Leiden login page will complete 2FA automatically.

| Step | Action |
|:----:|:-------|
| 1 | [Download](#step-1--download) |
| 2 | [Install the extension](#step-2--install-the-extension) |
| 3 | [Open extension settings](#step-3--open-extension-settings) |
| 4 | [Get your secret key from Leiden](#step-4--get-your-secret-key-from-leiden) |
| 5 | [Configure the extension](#step-5--configure-the-extension) |
| 6 | [Enable the extension](#step-6--enable-the-extension) |
| 7 | [Done](#step-7--youre-done) |

---

### Step 1 — Download

1. On this repo, click **Code** → **Download ZIP**.

   ![Download ZIP](docs/screenshots/image6.jpg)

2. Unzip the file:
   - **macOS:** Double-click the ZIP.
   - **Windows:** Right-click → **Extract all** (or Unzip).

   ![Unzip](docs/screenshots/image7.png)

---

### Step 2 — Install the extension

1. Open **Manage extensions** (toolbar icon or your browser’s extensions page).

   ![Manage extensions](docs/screenshots/image8.jpg)

2. Turn **Developer mode** on (toggle at the bottom).

   ![Developer mode](docs/screenshots/image9.png)

3. Click **Load unpacked**.

   ![Load unpacked](docs/screenshots/image10.jpg)

4. Select the **`extension`** folder (the one containing `manifest.json`) and confirm.

   ![Select extension folder](docs/screenshots/image11.jpg)

5. **Leiden MFA Auto-Pass** should appear in your extensions list.

   ![Added to extensions](docs/screenshots/image12.png)

---

### Step 3 — Open extension settings

1. Find **Leiden MFA Auto-Pass** in the extensions menu or list.
2. Click it, then **Open Settings** (or **Extension options** from the management page).

   ![Choose Leiden MFA Auto-Pass](docs/screenshots/image13.jpg)

   ![Open Settings](docs/screenshots/image14.jpg)

---

### Step 4 — Get your secret key from Leiden

1. Open **[Leiden Identity Manager](https://account.services.universiteitleiden.nl/idmdash/#/landing)** and sign in.

2. Go to **Multi-Factor Authentication**.

   ![Dashboard](docs/screenshots/image1.jpg)

3. Under **TOTP Non-NetIQ Authenticator**, click **Enroll** (first time) or **Modify** (if already set up).

   ![Select authenticator](docs/screenshots/image2.jpg)

4. **Copy the secret key** (long alphanumeric string). Keep this tab open for the next step.

   ![Secret key](docs/screenshots/image3.jpg)

---

### Step 5 — Configure the extension

1. In the extension **Settings**, paste your secret key into **TOTP Secret Key**.

   ![Settings](docs/screenshots/image4.jpg)

2. A **6-digit code** will appear and refresh every 30 seconds.

   ![TOTP code](docs/screenshots/image5.jpg)

3. If Leiden still asks for a code to finish enrollment: in the Leiden tab, enter that 6-digit code and click **Next**.

4. Back in the extension, click **Save Settings**.

5. *(Optional)* Enable **Auto-fill credentials**, enter your Leiden username and password, and save to auto-fill the login form.

---

### Step 6 — Enable the extension

The extension is **disabled** by default. Before testing:

1. Click the **Leiden MFA Auto-Pass** icon (or open the extensions menu).
2. Click **Enable**.

   ![Enable the extension](docs/screenshots/image15.jpg)

---

### Step 7 — You're done

1. Go to a Leiden login page (e.g. [login.leidenuniv.nl](https://login.leidenuniv.nl/)).

2. Sign in with your username and password (or let the extension fill them if you enabled that).

3. The extension will select “Code from non-NetIQ Authenticator”, enter the code, and submit. You should be logged in without typing a code.

---

## Author

**teshnizi2**  
[https://github.com/teshnizi2/leiden-mfa-autopass](https://github.com/teshnizi2/leiden-mfa-autopass)

---

## License

MIT. Not affiliated with Leiden University. Use at your own risk; keep a backup 2FA method (e.g. your phone app).
