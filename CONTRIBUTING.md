# 🤝 Contributing to Leiden MFA Auto-Pass

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 🐛 Reporting Bugs

If you find a bug, please open an issue with:

- **Clear title** describing the problem
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Browser version** and OS
- **Console logs** (F12 → Console)
- **Extension version** (from manifest.json)

## 💡 Suggesting Features

Feature requests are welcome! Please include:

- **Clear description** of the feature
- **Use case** - why is this needed?
- **Possible implementation** (if you have ideas)

## 🔧 Pull Requests

### Before Submitting

1. **Check existing issues** - someone might be working on it
2. **Open an issue first** - discuss major changes before coding
3. **Test thoroughly** - make sure it works on multiple browsers

### PR Guidelines

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Test extensively**:
   - Test on Edge, Chrome, or Brave
   - Test all three login steps
   - Check console for errors
   - Verify TOTP codes are correct
5. **Update documentation** if needed
6. **Commit with clear messages**:
   - `feat: add new feature`
   - `fix: resolve bug with X`
   - `docs: update installation guide`
7. **Push to your fork**
8. **Open a Pull Request**

### Commit Message Format

```
type: short description

Longer description if needed.

Fixes #123
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

## 📝 Code Style

### JavaScript

- Use semicolons
- 2-space indentation
- Clear variable names
- Add comments for complex logic
- Use `const` and `let` (not `var`)

Example:
```javascript
// Good
const codeInput = document.querySelector('input[name="nffc"]');
if (codeInput) {
  console.log('[Extension] Code input found');
}

// Bad
var input = document.querySelector('input[name="nffc"]')
if(input){console.log('found')}
```

### Console Logging

Use consistent prefixes:
```javascript
console.log('[Leiden MFA Auto-Pass] Status message');
console.error('[Leiden MFA Auto-Pass] ❌ Error message');
```

## 🧪 Testing

Before submitting a PR, test:

1. **Fresh installation**
   - Uninstall extension
   - Load unpacked
   - Configure settings
   - Test full login flow

2. **All three steps**
   - Login page (if auto-fill enabled)
   - Chain selection page
   - Code entry page

3. **Error cases**
   - Wrong TOTP secret
   - Missing configuration
   - Disabled extension

4. **Multiple browsers**
   - At least test on 2 different Chromium browsers

## 🔒 Security

- **Never commit secrets** (TOTP keys, passwords)
- **Test with dummy data** when possible
- **Report security issues privately** - email maintainer instead of opening public issue

## 📚 Documentation

If you're updating code that affects users:

- Update `README.md` if needed
- Update README setup section for installation changes
- Update `CHANGELOG.md` with your changes
- Add code comments for complex logic

## ✅ Checklist Before PR

- [ ] Code works and is tested
- [ ] Console has no errors
- [ ] Documentation updated if needed
- [ ] CHANGELOG.md updated
- [ ] No secrets or personal data in commits
- [ ] Follows code style guidelines
- [ ] Clear commit messages

## 🎯 Good First Issues

New to contributing? Look for issues tagged:
- `good first issue`
- `help wanted`
- `documentation`

## 💬 Questions?

- Open a discussion issue
- Check existing documentation
- Ask in pull request comments

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for making Leiden MFA Auto-Pass better!** 🎉
