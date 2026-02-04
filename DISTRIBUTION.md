# 📤 Distribution Guide

How to share this extension with others.

## 🎯 Quick Summary

You have **3 options** for sharing:

1. **ZIP file** (easiest, for friends)
2. **GitHub** (best for public sharing and updates)
3. **Edge Add-ons Store** (official, but requires review process)

---

## Method 1: Share as ZIP File (Easiest) ⭐

Perfect for sharing with classmates or colleagues.

### Step 1: Create the ZIP

**On Mac:**
```bash
cd /Users/teshnizi/Documents/Auto-Two-Auth-Pass
zip -r leiden-mfa-autopass.zip extension/ README.md INSTALL.md
```

**Or manually:**
1. Go to `/Users/teshnizi/Documents/Auto-Two-Auth-Pass/`
2. Select the `extension` folder
3. Right-click → "Compress" (Mac) or "Send to → Compressed folder" (Windows)
4. Rename to `leiden-mfa-autopass.zip`

### Step 2: Share the ZIP

Upload to:
- **Google Drive** → Share link
- **Dropbox** → Share link
- **Email** → Send as attachment
- **File sharing service** (WeTransfer, etc.)

### Step 3: Send Installation Instructions

Send your friends this link to the installation guide:
- Include the `INSTALL.md` file in the ZIP, or
- Copy the instructions and send them

**That's it!** They download, unzip, and install.

---

## Method 2: GitHub Repository (Recommended) ⭐⭐⭐

Best for public sharing and allowing others to contribute.

### Step 1: Create GitHub Account

If you don't have one: https://github.com/join

### Step 2: Create Repository

1. **Go to:** https://github.com/new
2. **Repository name:** `leiden-mfa-autopass` (or any name)
3. **Description:** "Automated 2FA for Leiden University"
4. **Public** (so others can access)
5. **Don't initialize** (you already have files)
6. Click "Create repository"

### Step 3: Upload Your Code

**Easy way (via web):**
1. On the GitHub repository page
2. Click "uploading an existing file"
3. Drag all files from `/Users/teshnizi/Documents/Auto-Two-Auth-Pass/`
4. Commit changes

**Command line way:**
```bash
cd /Users/teshnizi/Documents/Auto-Two-Auth-Pass
git init
git add .
git commit -m "Initial commit - Leiden MFA Auto-Pass v2.0.1"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/leiden-mfa-autopass.git
git push -u origin main
```

### Step 4: Share the Link

Your repository URL will be:
```
https://github.com/YOUR_USERNAME/leiden-mfa-autopass
```

Share this link! Others can:
- Download as ZIP
- Clone the repository
- See all updates
- Report issues
- Contribute improvements

### Bonus: Add a Release

1. Go to your repo → "Releases" → "Create a new release"
2. Tag: `v2.0.1`
3. Title: `Leiden MFA Auto-Pass v2.0.1`
4. Description: Copy from `CHANGELOG.md`
5. Upload `leiden-mfa-autopass.zip`
6. Click "Publish release"

Now people can download official releases!

---

## Method 3: Edge Add-ons Store (Official)

**Pros:** 
- Official distribution
- Automatic updates
- Easy installation (one-click)

**Cons:**
- Requires developer account ($5 one-time fee)
- Review process (can take days/weeks)
- More complex

### Steps:

1. **Register:** https://partner.microsoft.com/dashboard/microsoftedge/public/login
2. **Pay fee:** $5 one-time registration
3. **Package extension:**
   ```bash
   cd extension
   zip -r ../leiden-mfa-autopass-store.zip *
   ```
4. **Submit:**
   - Go to Edge Partner Center
   - Click "New extension"
   - Upload ZIP
   - Fill in details (name, description, screenshots)
   - Submit for review

5. **Wait for approval** (3-7 days typically)

6. **Published!** Users can install from: `edge://extensions/`

**Note:** This is optional and only recommended if you want official distribution.

---

## 📋 What to Include When Sharing

Make sure you include:

✅ `extension/` folder (the actual extension)  
✅ `README.md` (overview and features)  
✅ `INSTALL.md` (installation instructions)  
✅ `DETAILED_USAGE_GUIDE.md` (full guide)  
✅ `CHANGELOG.md` (version history)  

**Don't include:**
❌ Your personal `.git` folder (if using Git)  
❌ Any `.DS_Store` files (Mac)  
❌ Your personal TOTP secrets  

---

## 🔒 Security Note

**Important:** When sharing:
- ✅ The extension code is safe to share
- ❌ **Never share YOUR personal TOTP secret**
- ✅ Each user must configure their own secret
- ✅ Make it clear in instructions that they need their own secret

---

## 📣 Sharing Tips

### Write a Good Description

When sharing (email, chat, post), include:

```
🔐 Leiden MFA Auto-Pass - Automated 2FA Extension

Tired of entering 2FA codes every time you log in to Leiden services? 
This extension automatically handles it for you!

✨ Features:
- Fully automated - zero clicks needed
- Secure - TOTP codes generated locally
- Fast - logs you in within seconds
- One-time attempt - won't lock your account

📦 Installation: 
[Link to ZIP or GitHub]

📖 Full guide included
🧪 Built-in testing tool

Works with Microsoft Edge and Chrome-based browsers.
```

### Post on Social Media / Forums

- University Discord servers
- Student Facebook groups
- Reddit (r/LeidenUniversity if exists)
- University forums

### Example GitHub README Badge

Add to the top of your GitHub repo:

```markdown
![Version](https://img.shields.io/badge/version-2.0.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Browser](https://img.shields.io/badge/browser-Edge%20%7C%20Chrome-orange)
```

---

## 🎉 You're Ready to Share!

Choose the method that works best for you:
- **Quick share to friends:** Method 1 (ZIP)
- **Public sharing with updates:** Method 2 (GitHub) ⭐ Recommended
- **Official distribution:** Method 3 (Edge Store)

Good luck! 🚀
