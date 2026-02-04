# Changelog

All notable changes to the Leiden MFA Auto-Pass extension.

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
