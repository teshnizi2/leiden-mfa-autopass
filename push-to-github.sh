#!/bin/bash

# Script to push Leiden MFA Auto-Pass to GitHub
# Run this after creating your repository on GitHub

echo "🚀 Leiden MFA Auto-Pass - GitHub Push Script"
echo "=============================================="
echo ""

# Check if we're in the right directory
if [ ! -f "README.md" ]; then
    echo "❌ Error: Please run this script from the Auto-Two-Auth-Pass directory"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized"
    exit 1
fi

# Get GitHub username
echo "📝 Please enter your GitHub username:"
read -p "Username: " username

if [ -z "$username" ]; then
    echo "❌ Error: Username cannot be empty"
    exit 1
fi

# Get repository name
echo ""
echo "📝 Please enter your repository name (default: leiden-mfa-autopass):"
read -p "Repository name: " repo_name

if [ -z "$repo_name" ]; then
    repo_name="leiden-mfa-autopass"
fi

# Confirm details
echo ""
echo "📋 Review your details:"
echo "   Username: $username"
echo "   Repository: $repo_name"
echo "   URL: https://github.com/$username/$repo_name"
echo ""
read -p "Is this correct? (y/n): " confirm

if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "❌ Cancelled"
    exit 0
fi

# Check if remote already exists
if git remote | grep -q "origin"; then
    echo ""
    echo "⚠️  Remote 'origin' already exists. Updating..."
    git remote set-url origin "https://github.com/$username/$repo_name.git"
else
    echo ""
    echo "➕ Adding remote repository..."
    git remote add origin "https://github.com/$username/$repo_name.git"
fi

# Set main branch
echo "🔧 Setting main branch..."
git branch -M main

# Push to GitHub
echo "📤 Pushing to GitHub..."
echo ""
git push -u origin main

# Check if push was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "=============================================="
    echo "✅ SUCCESS! Your repository is now on GitHub!"
    echo "=============================================="
    echo ""
    echo "🌐 View your repository:"
    echo "   https://github.com/$username/$repo_name"
    echo ""
    echo "📤 Share with others:"
    echo "   Send them: https://github.com/$username/$repo_name"
    echo ""
    echo "🏷️  Next steps:"
    echo "   1. Go to your repository on GitHub"
    echo "   2. Add a description and topics"
    echo "   3. Create a release (optional)"
    echo "   4. Share with your friends!"
    echo ""
else
    echo ""
    echo "=============================================="
    echo "❌ Push failed"
    echo "=============================================="
    echo ""
    echo "Common solutions:"
    echo ""
    echo "1. Make sure you created the repository on GitHub first:"
    echo "   https://github.com/new"
    echo ""
    echo "2. If you need authentication:"
    echo "   - Install GitHub CLI: brew install gh"
    echo "   - Login: gh auth login"
    echo "   - Then run this script again"
    echo ""
    echo "3. Or use SSH instead:"
    echo "   git remote set-url origin git@github.com:$username/$repo_name.git"
    echo "   git push -u origin main"
    echo ""
fi
