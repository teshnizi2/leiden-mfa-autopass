# 🌐 Browser Compatibility

## ✅ Fully Supported Browsers

This extension works on **all Chromium-based browsers**:

| Browser | Compatibility | Installation URL |
|---------|--------------|------------------|
| **Microsoft Edge** | ✅ Full support | `edge://extensions/` |
| **Google Chrome** | ✅ Full support | `chrome://extensions/` |
| **Brave** | ✅ Full support | `brave://extensions/` |
| **Opera** | ✅ Full support | `opera://extensions/` |
| **Vivaldi** | ✅ Full support | `vivaldi://extensions/` |
| **Arc** | ✅ Full support | `arc://extensions/` |
| **Any Chromium** | ✅ Full support | `chrome://extensions/` |

### Installation Steps (Same for All)

1. Go to the extensions page (URL from table above)
2. Turn ON "Developer mode"
3. Click "Load unpacked"
4. Select the `extension` folder
5. Done!

---

## ❌ NOT Supported Browsers

| Browser | Why Not Supported | Alternative |
|---------|------------------|-------------|
| **Firefox** | Uses Manifest V2, different API | Would require rewrite |
| **Safari** | Different extension system | Would require rewrite |
| **Internet Explorer** | Outdated, no extension support | Use Edge instead |

---

## 🔍 How to Check Your Browser

Not sure if your browser is Chromium-based?

1. Open your browser
2. Type `chrome://version/` in the address bar
3. If it shows Chrome/Chromium version info → **Compatible!** ✅
4. If it shows an error → **Not compatible** ❌

---

## 📊 Tested Browsers

The extension has been tested on:

- ✅ Microsoft Edge 120+ (Windows, macOS)
- ✅ Google Chrome 120+ (Windows, macOS, Linux)
- ✅ Brave 1.60+ (Windows, macOS)

**Should work on:** Opera, Vivaldi, Arc, and other Chromium browsers (not specifically tested but should work)

---

## 🔄 Browser-Specific Notes

### Microsoft Edge
- Best integration with Windows
- Recommended for Windows users
- Auto-updates supported

### Google Chrome
- Most popular option
- Works identically to Edge version
- Large extension ecosystem

### Brave
- Privacy-focused browser
- Extension works perfectly
- Built-in ad/tracker blocking

### Opera
- Built-in VPN support
- Extension works fine
- GX Gaming version also compatible

### Vivaldi
- Power-user focused
- Extension compatible
- Advanced customization options

---

## 🚀 Publishing to Stores

The extension can be published to:

- ✅ **Edge Add-ons Store** - For Edge users (official)
- ✅ **Chrome Web Store** - For Chrome/Chromium users (official)
- ❌ **Firefox Add-ons** - Would require Manifest V2 rewrite
- ❌ **Safari Extensions** - Would require complete rewrite

---

## 💡 Migration Notes

### From Firefox to Chromium

If you're currently using Firefox, to use this extension you'll need to:

1. Install a Chromium browser (Edge, Chrome, Brave, etc.)
2. Import your bookmarks and settings (all browsers have import tools)
3. Install this extension
4. Keep Firefox for sites that work better there (optional)

### From Safari to Chromium

Similar process:
1. Install a Chromium browser
2. Import bookmarks (File → Import)
3. Install this extension
4. Keep Safari as alternative if needed

---

## 🎯 Recommended Browser

**For Leiden students:**

- **Windows:** Microsoft Edge (pre-installed, best integration)
- **macOS:** Chrome or Brave (Edge works too)
- **Linux:** Chrome or Brave

All work identically for this extension!

---

## 🔧 Troubleshooting

### "This extension is not compatible with your browser"

Your browser is not Chromium-based. Options:
1. Install Edge, Chrome, or Brave
2. Or wait for Firefox/Safari version (not currently planned)

### Extension works in one Chromium browser but not another

This shouldn't happen (they're all Chromium), but if it does:
1. Check browser is up to date
2. Try removing and re-installing extension
3. Check console logs (F12) for errors
4. Report as bug

---

**Bottom line:** If it can run Chrome extensions, it can run this extension! 🎉
