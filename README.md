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

<p align="center">
  <sub>Works with Edge, Chrome, Brave, Opera • Windows, macOS, Linux</sub>
</p>

---

## ✨ At a glance

| Property | Details |
|:---------|:--------|
| **Browsers** | Edge, Chrome, Brave, Opera (Chromium-based) |
| **Platforms** | Windows, macOS, Linux |
| **Method** | TOTP (Authenticator code only) |
| **Repository** | [github.com/teshnizi2/leiden-mfa-autopass](https://github.com/teshnizi2/leiden-mfa-autopass) |

---

## 📋 Full setup guide (~15 min)

> **Do this once.** After that, visiting a Leiden login page will complete 2FA automatically.

| # | Step |
|:--:|:-----|
| 1 | [Download](#step-1--download) |
| 2 | [Install the extension](#step-2--install-the-extension) |
| 3 | [Get your secret key from Leiden](#step-3--get-your-secret-key-from-leiden) |
| 4 | [Open extension settings](#step-4--open-extension-settings) |
| 5 | [Configure the extension](#step-5--configure-the-extension) |
| 6 | [Complete Leiden enrollment](#step-6--complete-leiden-enrollment) |
| 7 | [Enable the extension](#step-7--enable-the-extension) |
| 8 | [Done](#step-8--youre-done) |

---

### Step 1 — Download

1. On this repository page, click **Code** → **Download ZIP**.

   <p align="center">
     <img src="docs/screenshots/image6.jpg" alt="Download ZIP" width="600" />
   </p>

2. Unzip the file:
   - **macOS:** Double-click the ZIP file.
   - **Windows:** Right-click → **Extract all** (or use an unzip tool).

   <p align="center">
     <img src="docs/screenshots/image7.png" alt="Unzip" width="600" />
   </p>

---

### Step 2 — Install the extension

1. Open **Manage extensions** (toolbar icon or your browser's extensions page).

   <p align="center">
     <img src="docs/screenshots/image8.jpg" alt="Manage extensions" width="600" />
   </p>

2. Turn **Developer mode** on (toggle at the bottom).

   <p align="center">
     <img src="docs/screenshots/image9.png" alt="Developer mode" width="600" />
   </p>

3. Click **Load unpacked**.

   <p align="center">
     <img src="docs/screenshots/image10.jpg" alt="Load unpacked" width="600" />
   </p>

4. Select the **`extension`** folder (the one containing `manifest.json`) and confirm.

   <p align="center">
     <img src="docs/screenshots/image11.jpg" alt="Select extension folder" width="600" />
   </p>

5. **Leiden MFA Auto-Pass** should appear in your extensions list.

   <p align="center">
     <img src="docs/screenshots/image12.png" alt="Added to extensions" width="600" />
   </p>

6. Find **Leiden MFA Auto-Pass** in the extensions menu or list.

   <p align="center">
     <img src="docs/screenshots/image13.jpg" alt="Choose Leiden MFA Auto-Pass" width="600" />
   </p>

7. Click it, then click **Open Settings** (or **Extension options** from the management page).

   <p align="center">
     <img src="https://github.com/user-attachments/assets/de28d16a-2f21-4dba-987d-6a1e5c7a9ad8" alt="Open Settings" width="600" />
   </p>

8. Find the **TOTP configuration** section.

   <p align="center">
     <img src="https://github.com/user-attachments/assets/5ae05d90-a7ee-465d-a2e4-bc5af8d5c476" alt="TOTP configuration" width="600" />
   </p>

---

### Step 3 — Get your secret key from Leiden

1. Open **[Leiden Identity Manager](https://account.services.universiteitleiden.nl/idmdash/#/landing)** and sign in.

2. Go to **Multi-Factor Authentication**.

   <p align="center">
     <img src="docs/screenshots/image1.jpg" alt="Dashboard" width="600" />
   </p>

3. Complete the two-step verification using any method available to you:

   <p align="center">
     <img src="https://github.com/user-attachments/assets/6891209c-4983-4e56-81f2-f7e092a5ad4c" alt="Two-step verification" width="400" />
   </p>

4. Under **TOTP Non-NetIQ Authenticator**, click **Enroll** (first time) or **Modify** (if already set up).

   <p align="center">
     <img src="docs/screenshots/image2.jpg" alt="Select authenticator" width="600" />
   </p>

5. **Copy the secret key** (long alphanumeric string), then paste it into the TOTP configuration in the extension settings and click **Next**.

   <p align="center">
     <img src="https://github.com/user-attachments/assets/272f73fb-f101-4386-a814-193f7fe2ed5a" alt="Paste secret key" width="600" />
   </p>

6. Paste the code that appears in the TOTP section and click **Next**:

   <p align="center">
     <img src="https://github.com/user-attachments/assets/24ea4fd5-753a-4e53-9c8b-8b7315cc1a18" alt="Enter TOTP code" width="600" />
   </p>

7. At the end of the extension settings page, **save the changes**:

   <p align="center">
     <img src="https://github.com/user-attachments/assets/eca116b7-c9b8-4953-8942-58340ef0bfe7" alt="Save changes" width="600" />
   </p>

---

### Step 4 — Open extension settings

> **Note:** If you already opened the settings in Step 2, you can skip this step.

If you need to access the extension settings:

1. Find **Leiden MFA Auto-Pass** in the extensions menu or list.
2. Click it, then click **Open Settings** (or **Extension options** from the management page).
3. Navigate to the **TOTP configuration** section.

---

### Step 5 — Configure the extension

> **Note:** If you already configured the extension in Step 3, you can skip to Step 6.

To configure the extension with your secret key:

1. In the extension settings TOTP configuration section, paste your secret key (copied from Step 3) into the **TOTP Secret Key** field.
2. Click **Next** to verify the configuration.
3. Confirm that a 6-digit code appears and refreshes every 30 seconds.
4. Click **Save Settings** at the bottom of the page to save your changes.

---

### Step 6 — Complete Leiden enrollment

1. Go back to the **Leiden Identity Manager** tab (from Step 3).

2. Enter the **6-digit code** from the extension (displayed in the TOTP configuration section) into the verification field.

3. Click **Next** (or **Verify**) to complete enrollment.

4. Leiden enrollment is now complete. You can close this tab.

---

### Step 7 — Enable the extension

The extension is **disabled** by default. Before testing:

1. Click the **Leiden MFA Auto-Pass** icon (or open the extensions menu).
2. Click **Enable**.

   <p align="center">
     <img src="docs/screenshots/image15.jpg" alt="Enable the extension" width="600" />
   </p>

---

### Step 8 — You're done 🎉

1. Go to a Leiden login page (e.g., [login.leidenuniv.nl](https://login.leidenuniv.nl/)).

2. Sign in with your username and password (or let the extension fill them if you enabled that feature).

3. The extension will automatically select "Code from non-NetIQ Authenticator", enter the code, and submit it. You should be logged in without typing a code manually.

---

## 👤 Author

**teshnizi2**  
[https://github.com/teshnizi2/leiden-mfa-autopass](https://github.com/teshnizi2/leiden-mfa-autopass)

---

## 📄 License

MIT. Not affiliated with Leiden University. Use at your own risk; keep a backup 2FA method (e.g., your phone app).
