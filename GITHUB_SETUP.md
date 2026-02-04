# 🚀 GitHub Setup Guide

Your repository is ready to push to GitHub! Follow these steps:

## ✅ What's Already Done

I've already completed these steps for you:
- ✅ Cleaned up duplicate documentation files
- ✅ Created `.gitignore` to exclude unnecessary files
- ✅ Added `LICENSE` (MIT License)
- ✅ Added `CONTRIBUTING.md` for contributors
- ✅ Initialized git repository
- ✅ Committed all files with a detailed commit message
- ✅ Configured git with your username

## 📋 What You Need to Do

### Step 1: Create GitHub Repository

1. **Go to GitHub:**
   - Open: https://github.com/new
   - (Log in if you're not already)

2. **Fill in repository details:**
   - **Repository name:** `leiden-mfa-autopass` (or any name you prefer)
   - **Description:** `Automated 2FA for Leiden University - Browser Extension`
   - **Visibility:** 
     - ✅ **Public** (recommended - so others can use it)
     - Or Private (if you want to keep it private initially)
   - **Important:** ❌ Do NOT check "Add a README file"
   - **Important:** ❌ Do NOT check "Add .gitignore"
   - **Important:** ❌ Do NOT check "Choose a license"
   
   (We already have all of these files!)

3. **Click "Create repository"**

### Step 2: Push Your Code

After creating the repository, GitHub will show you commands. **Ignore those** and use these instead:

**Open Terminal** and run these commands:

```bash
cd /Users/teshnizi/Documents/Auto-Two-Auth-Pass

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/leiden-mfa-autopass.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:** If your GitHub username is `teshnizi`, the command would be:
```bash
git remote add origin https://github.com/teshnizi/leiden-mfa-autopass.git
```

### Step 3: Verify Upload

1. **Refresh your GitHub repository page**
2. You should see all your files!
3. The README.md will be displayed on the main page

## 🎉 You're Done!

Your repository is now live on GitHub at:
```
https://github.com/YOUR_USERNAME/leiden-mfa-autopass
```

## 📤 Share Your Extension

Now you can share the link with others! They can:
- Click the green "Code" button → "Download ZIP"
- Follow the installation instructions in `INSTALL.md`
- Report issues or contribute

## 🏷️ Create a Release (Optional but Recommended)

Make it easier for users to download:

1. **Go to your repository on GitHub**
2. **Click "Releases"** (on the right sidebar)
3. **Click "Create a new release"**
4. **Fill in:**
   - **Tag:** `v2.0.1`
   - **Release title:** `Leiden MFA Auto-Pass v2.0.1`
   - **Description:** Copy from `CHANGELOG.md`
5. **Upload files:** (optional)
   - Create a ZIP of the `extension` folder
   - Name it `leiden-mfa-autopass-v2.0.1.zip`
   - Upload as release asset
6. **Click "Publish release"**

Now users can download directly from releases!

## 🔄 Making Updates Later

When you want to update the code:

```bash
cd /Users/teshnizi/Documents/Auto-Two-Auth-Pass

# Make your changes...

# Stage and commit
git add .
git commit -m "Description of your changes"

# Push to GitHub
git push
```

## 🛠️ Troubleshooting

### "Permission denied" or authentication error

You need to authenticate with GitHub. Options:

**Option 1: GitHub CLI (Easiest)**
```bash
# Install GitHub CLI
brew install gh

# Login
gh auth login
```

**Option 2: Personal Access Token**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "Leiden MFA Extension"
4. Check: `repo` (all repo permissions)
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. When pushing, use the token as your password

**Option 3: SSH Key**
Follow: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/leiden-mfa-autopass.git
```

### Need to change repository name?

1. Go to your GitHub repository
2. Click "Settings"
3. Change "Repository name"
4. Update your local remote:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/NEW_NAME.git
```

## 📞 Need Help?

If you run into issues:
1. Copy the error message
2. Search Google: "git [your error]"
3. Or ask me for help!

---

**Your extension is ready to share with the world! 🌍**
