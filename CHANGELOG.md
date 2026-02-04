# Changelog

All notable changes to the Leiden MFA Auto-Pass extension.

## [2.0.5] - 2026-02-04

### Removed
- Unused files: `image.png`, `GITHUB_SETUP.md`, `push-to-github.sh`, `REPOSITORY_SUMMARY.md`, `DESIGN_FEATURES.md`, `DISTRIBUTION.md`, `BROWSER_COMPATIBILITY.md`
- `extension/create-icons.py` (development-only; icons are included)
- `INSTALL.md`, `VISUAL_SETUP_GUIDE.md`, `DETAILED_USAGE_GUIDE.md` — merged into README

### Documentation
- Single **full setup guide** in README with all 5 steps and screenshots
- No troubleshooting or extra docs; README is the only guide users need
- Extension options link to README setup section on GitHub

## [2.0.4] - 2026-02-04

### Added
- 📸 **Complete Visual Setup Guide** with 5 step-by-step screenshots
- 🖼️ **Screenshots folder** (docs/screenshots/) with all setup images
- 🔗 **Direct links** to Leiden Identity Manager in documentation
- 📝 **Enhanced instructions** showing exact Leiden workflow

### Improved
- 📖 README.md now includes screenshot previews
- 📋 INSTALL.md updated with visual guide references
- ⚙️ Settings page links directly to Leiden dashboard
- 🎯 All documentation now points to visual walkthrough

## [2.0.3] - 2026-02-04

### Improved
- 🎨 **Complete UI/UX redesign** - Beautiful, modern, professional interface
- ✨ **Settings page redesign**:
  - Stunning gradient backgrounds and animations
  - Card-based layout with hover effects
  - Beautiful TOTP code display with gradient background
  - Improved typography and spacing
  - Smooth animations and transitions
- 🎯 **Popup redesign**:
  - Modern, animated interface
  - Status indicators with pulse animations
  - Quick info section
  - Better button designs
  - Professional color scheme
- 📱 **Better mobile/responsive design**
- 🌈 **Enhanced visual hierarchy**
- ⚡ **Smooth transitions and micro-interactions**

## [2.0.2] - 2026-02-04

### Added
- ✨ **Live TOTP code display** in settings page - see your 6-digit codes in real-time
- 🔄 Auto-updating code display with countdown timer and progress bar
- 🎨 Beautiful gradient UI for code display

### Removed
- 🗑️ Removed separate test-totp.html page (functionality now integrated in settings)

### Improved
- 🎯 Better UX - users can verify their codes directly in settings
- ⚡ Instant feedback when entering secret key

## [2.0.1] - 2026-02-04

### Fixed
- 🔒 **Critical:** Implemented session-based lock to prevent multiple retry attempts
- ✅ Verified TOTP generation now matches authenticator apps
- 🐛 Fixed account lockout issues caused by repeated code attempts

### Added
- 🧪 Built-in test page (`test-totp.html`) to verify TOTP codes
- 📊 Real-time TOTP code generation with countdown timer
- 🔍 Diagnostic tools for troubleshooting time sync issues
- 📝 Comprehensive installation and sharing documentation

### Changed
- ⚡ Simplified code execution flow for better reliability
- 🎯 Extension now attempts login **exactly once per session**
- 📋 Improved logging and console messages
- 🔐 Session lock persists across page navigations until browser restart

### Security
- ✅ Session-based protection prevents infinite retry loops
- 🔒 Added multiple safeguards against account lockouts

## [2.0.0] - 2026-02-03

### Changed
- 🎯 **Major refactor:** Removed email and push notification methods
- ⚡ Simplified to **TOTP-only** (fully automated method)
- 🧹 Cleaned up codebase and removed unused files

### Removed
- ❌ Gmail API integration
- ❌ Email code parsing
- ❌ NetIQ push notification support
- ❌ Method selection (now TOTP-only)
- 🗑️ Removed outdated documentation files

### Added
- ✅ Optional auto-fill for username/password (login page)
- ✅ Auto-detection of all three login steps
- 📝 Updated documentation for TOTP-only workflow

## [1.0.0] - Initial Release

### Added
- 🚀 Basic automation for Leiden MFA
- 📧 Email code method
- 📱 NetIQ push notification method
- 🔐 TOTP code method
- ⚙️ Extension settings page

---

**Format:** [Version] - Date
**Types:** Added, Changed, Deprecated, Removed, Fixed, Security
