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

6. Find **Leiden MFA Auto-Pass** in the extensions menu or list.

   ![Choose Leiden MFA Auto-Pass](docs/screenshots/image13.jpg)

7. Click it, then **Open Settings** (or **Extension options** from the management page).

  ![tg_image_3741009253](https://github.com/user-attachments/assets/de28d16a-2f21-4dba-987d-6a1e5c7a9ad8)

   
8. find the TOTP configuration.

<img width="808" height="983" alt="tg_image_2218435023" src="https://github.com/user-attachments/assets/5ae05d90-a7ee-465d-a2e4-bc5af8d5c476" />

---

### Step 3 — Get your secret key from Leiden

1. Open **[Leiden Identity Manager](https://account.services.universiteitleiden.nl/idmdash/#/landing)** and sign in.

2. Go to **Multi-Factor Authentication**.

   ![Dashboard](docs/screenshots/image1.jpg)

3. pass the two step verification the any way that is possible for you:

<img width="402" height="509" alt="telegram-cloud-document-4-5794089205051169220" src="https://github.com/user-attachments/assets/6891209c-4983-4e56-81f2-f7e092a5ad4c" />


4. Under **TOTP Non-NetIQ Authenticator**, click **Enroll** (first time) or **Modify** (if already set up).

   ![Select authenticator](docs/screenshots/image2.jpg)

5. **Copy the secret key** (long alphanumeric string). and paste it in the TOTP configuration in the extention setting. and click next after that.

  ![telegram-cloud-document-4-5794089205051169201](https://github.com/user-attachments/assets/272f73fb-f101-4386-a814-193f7fe2ed5a)


6. paste the code that you can see in the TOTP section and click next:
![telegram-cloud-document-4-5794089205051169202](https://github.com/user-attachments/assets/24ea4fd5-753a-4e53-9c8b-8b7315cc1a18)

7. in the end of the setting page of extiontion save the changes:

![telegram-cloud-document-4-5794089205051169213](https://github.com/user-attachments/assets/eca116b7-c9b8-4953-8942-58340ef0bfe7)



---

### Step 5 — Configure the extension



2. A **6-digit code** will appear and refresh every 30 seconds.
   > Copy this code—you'll need it in the next step.

   ![TOTP code](docs/screenshots/image5.jpg)

3. *(Optional)* Enable **Auto-fill credentials**, enter your Leiden username and password.

4. Click **Save Settings**.

---

### Step 6 — Complete Leiden enrollment

1. Go back to the **Leiden Identity Manager** tab (from Step 3).

2. Enter the **6-digit code** from the extension (from Step 5) into the verification field.

3. Click **Next** (or **Verify**) to complete enrollment.

4. Leiden enrollment is now complete. You can close this tab.

---

### Step 7 — Enable the extension

The extension is **disabled** by default. Before testing:

1. Click the **Leiden MFA Auto-Pass** icon (or open the extensions menu).
2. Click **Enable**.

   ![Enable the extension](docs/screenshots/image15.jpg)

---

### Step 8 — You're done 🎉

1. Go to a Leiden login page (e.g. [login.leidenuniv.nl](https://login.leidenuniv.nl/)).

2. Sign in with your username and password (or let the extension fill them if you enabled that).

3. The extension will select "Code from non-NetIQ Authenticator", enter the code, and submit. You should be logged in without typing a code.

---

## 👤 Author

**teshnizi2**  
[https://github.com/teshnizi2/leiden-mfa-autopass](https://github.com/teshnizi2/leiden-mfa-autopass)

---

## 📄 License

MIT. Not affiliated with Leiden University. Use at your own risk; keep a backup 2FA method (e.g. your phone app).
