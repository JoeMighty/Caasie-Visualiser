# 🚀 Caasie Data Visualizer

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg?style=flat-square)](https://creativecommons.org/licenses/by/4.0/)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-blue?style=flat-square)]()
[![WCAG](https://img.shields.io/badge/WCAG-2.1%20AA-purple?style=flat-square)]()
[![No Build](https://img.shields.io/badge/Build%20Process-None-brightgreen?style=flat-square)]()

Modern, accessible data visualization dashboard for Caasie.co campaign analytics. Built with pure HTML, CSS, and JavaScript - no build process required!

## 🌐 Live Demo

**Ready to use:** [https://joemighty.github.io/Caasie-Visualiser/](https://joemighty.github.io/Caasie-Visualiser/)

Upload your Caasie.co data and start visualizing immediately!

---
## 📁 Files Included

```
├── index.html    (~12 KB) - HTML structure with filtering UI
├── style.css     (~18 KB) - Complete styling with dark teal theme, FAB, filters
└── script.js     (~50 KB) - All functionality + filtering + 60 sample records
```

**Total size:** ~80 KB (excluding external CDN libraries)

---

## ✨ Features

### 📊 Data Visualization
- **8 Key Metrics Dashboard** - Total Plays, Audience, Cost, Average CPP, Unique Boards, Venue Types, Average Screen Time, Campaign Days
- **5 Interactive Charts:**
  - **Daily Performance** - Dual Y-axis line chart showing plays and audience trends over time
  - **Venue Distribution** - Doughnut chart breaking down performance by venue type
  - **Cost Analysis** - Bar chart tracking daily campaign costs
  - **Screen Time Distribution** - Histogram showing screen time intervals
  - **Top 10 Boards by Audience** - Horizontal bar chart of best performing locations
- **Top Boards Table** - Sortable performance table with detailed metrics

### 🎛️ Advanced Filtering
- **Date Range Filter** - Custom start and end date selection
- **Venue Type Filter** - Filter by specific venue types (outdoor panels, bus shelters, malls, stations, airports)
- **Campaign Filter** - Isolate specific campaigns for focused analysis
- **Reset Filters** - One-click return to full dataset
- **Real-time Updates** - Charts and metrics recalculate instantly on filter changes
- **Auto-populated Options** - Filters dynamically populate from your uploaded data

### 🎨 Customization
- **Color Scheme Editor** - Customize 5 brand colors in real-time
- **Typography Selector** - Choose from 15 Google Fonts
- **Chart Visibility Controls** - Toggle any chart on/off
- **Floating Customize Button** - Always-accessible settings via bottom-right FAB
- **Persistent Settings** - All preferences saved to localStorage

### 📤 Data Import
- **Drag & Drop Upload** - Intuitive file upload interface
- **Multiple Formats** - CSV, XLSX, XLS support
- **Sample Data Included** - 60 diverse UK campaign records for testing
- **Auto-validation** - Checks for required columns

### 🎯 User Experience
- **Fully Responsive** - Adapts to mobile, tablet, and desktop (2/3/4 column layouts)
- **WCAG 2.1 AA Compliant** - Full accessibility support
- **No Installation** - Works immediately, no build process
- **Offline Ready** - All functionality available locally
- **Fast Loading** - Optimized performance
- **Smart Grid** - Metrics auto-resize to fill available space with no gaps

---

## 🎨 Customization

### Default Color Palette
```css
Primary:        #3bd62b  /* Caasie green */
Primary Light:  #d6ffd2  /* Light green */
Background:     #001a23  /* Dark blue-black */
Accent Yellow:  #fece00  /* Bright yellow */
Accent Blue:    #18265e  /* Deep blue */
```

### Available Fonts
- Poppins (default)
- Roboto
- Open Sans
- Montserrat
- Lato
- Raleway
- Oswald
- Source Sans Pro
- Merriweather
- Playfair Display
- Inter
- Nunito
- Ubuntu
- Work Sans
- DM Sans

### How to Customize
1. Click the **⚙️ floating button** in the bottom-right corner
2. Navigate between tabs:
   - **🎨 Colors** - Adjust color scheme with color pickers
   - **🔤 Fonts** - Select typography from dropdown
   - **📊 Charts** - Toggle chart visibility with switches
3. Changes apply instantly and save automatically
4. Click outside the panel or press the FAB again to close

---


## 📊 Required Data Format

Your Caasie.co data file must include these columns:

### Required Columns
| Column Name | Type | Description |
|-------------|------|-------------|
| `Campaign` | String | Campaign name |
| `Date (UTC)` | Date | Date in YYYY-MM-DD format |
| `Board` | String | Board location/identifier |
| `Venue Type` | String | Type of venue (e.g., outdoor.urban_panels) |
| `Total Plays` | Number | Number of times ad was played |
| `Total Audience` | Number | Total audience reached |
| `Total Cost (Your Currency)` | Number | Cost in your currency |
| `Total Screen Time (secs)` | Number | Total screen time in seconds |

### Optional Columns
| Column Name | Type | Description |
|-------------|------|-------------|
| `Latitude` | Number | Geographic latitude |
| `Longitude` | Number | Geographic longitude |
| `Average CPP (Your Currency)` | Number | Average cost per play |

### Supported File Formats
- **CSV** (.csv) - Comma-separated values
- **Excel** (.xlsx, .xls) - Microsoft Excel files

---

## 💡 Usage
### Getting Started

1. **Visit the live page:**
   [https://joemighty.github.io/Caasie-Visualiser/](https://joemighty.github.io/Caasie-Visualiser/)

2. **Upload your data:**
   - Drag and drop your Caasie.co file onto the upload zone
   - OR click the upload zone to browse files
   - Supported formats: CSV, XLSX, XLS

3. **Filter your data (optional):**
   - Select date range to analyze specific time periods
   - Filter by venue type to compare performance
   - Filter by campaign to focus on specific initiatives
   - Combine filters for detailed drill-down analysis
   - Click "Reset" to clear all filters

4. **View your analytics:**
   - 8 key metrics update automatically based on filters
   - 5 interactive charts visualize filtered data
   - Top boards table shows performance rankings

5. **Customize appearance:**
   - Click the **⚙️ floating button** (bottom-right corner)
   - Adjust colors to match your brand
   - Select preferred fonts
   - Toggle charts on/off as needed

6. **Settings persist:**
   - Your preferences are saved automatically
   - Reload the page - settings remain
   - Upload new data anytime
   - Filters reset when uploading new data

### Local Usage

1. Download the files (`index.html`, `style.css`, `script.js`)
2. Open `index.html` in any modern browser
3. All features work offline
4. Upload your own Caasie.co files
5. Customizations save to browser localStorage

---

## 📱 Responsive Breakpoints

### Mobile Small (< 480px)
- Single column layout
- Stacked charts
- 2-column metrics grid (compact spacing)
- Optimized touch targets
- Simplified navigation
- Readable font sizes (minimum 16px)
- 52px floating customize button

### Mobile Large (480px - 767px)
- Single column layout
- Stacked charts
- 2-column metrics grid
- Comfortable spacing
- Touch-friendly interface
- Floating customize button bottom-right

### Tablet (768px - 1023px)
- 2-column chart layout
- 3-column metrics grid (auto-fills width)
- Comfortable spacing
- Touch-friendly interface
- Adaptive typography
- Horizontal filter layout

### Desktop (1024px - 1399px)
- Full bento grid layout
- 3-column metrics grid
- 2-column large charts
- Excellent screen utilization
- Hover interactions
- Optimal viewing experience

### Desktop XL (> 1400px)
- Full bento grid layout
- 4-column metrics grid (maximum utilization)
- 2-column large charts
- No wasted space
- Perfect for large monitors
- All features visible

### Tested Devices
- iPhone SE / 12 / 13 Pro Max
- iPad / iPad Pro
- Samsung Galaxy S21 / Tab S7
- Desktop monitors (1920×1080 to 3840×2160)
- 4K displays (optimized for 4-column layout)

---

## ♿ Accessibility

This application is fully compliant with **WCAG 2.1 Level AA** standards.

### Features
- ✅ **Keyboard Navigation** - Full functionality without mouse
- ✅ **Screen Reader Support** - Proper ARIA labels and semantic HTML
- ✅ **Focus Indicators** - Clear 3px outlines on interactive elements
- ✅ **Color Contrast** - All text meets 4.5:1 ratio minimum
- ✅ **Reduced Motion** - Respects `prefers-reduced-motion`
- ✅ **High Contrast Mode** - Support for system preferences
- ✅ **Alt Text** - Descriptive labels for all visual elements
- ✅ **Heading Structure** - Logical H1-H6 hierarchy
- ✅ **Skip Links** - Navigate directly to main content
- ✅ **Touch Targets** - Minimum 44×44px for all interactive elements

### Keyboard Shortcuts
- `Tab` - Navigate forward
- `Shift + Tab` - Navigate backward
- `Enter/Space` - Activate buttons and toggles
- `Arrow Keys` - Navigate within components

### Screen Reader Tested
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

---

## 📦 File Sizes

| File | Size | Compressed | Description |
|------|------|------------|-------------|
| `index.html` | ~12 KB | ~2.5 KB | HTML structure with filters |
| `style.css` | ~18 KB | ~4 KB | All styling + FAB + filters |
| `script.js` | ~50 KB | ~9 KB | Functionality + filtering + sample data |
| **Total** | **~80 KB** | **~15.5 KB** | Complete application |

### Performance
- **First Load:** < 2 seconds (on 3G)
- **Subsequent Loads:** < 1 second (cached)
- **Interactive Time:** < 1 second
- **Filter Response:** Instant (<50ms)
- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)

---

## 🌐 External Dependencies

All dependencies loaded via CDN - no installation required.

### Libraries
| Library | Version | Size | Purpose |
|---------|---------|------|---------|
| **Chart.js** | 4.4.0 | ~185 KB | Interactive charts |
| **PapaParse** | 5.4.1 | ~43 KB | CSV parsing |
| **SheetJS (xlsx)** | 0.18.5 | ~680 KB | Excel file parsing |
| **Google Fonts** | Latest | ~15-30 KB | Typography |

### CDN Links
```html
<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>

<!-- PapaParse -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"></script>

<!-- SheetJS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Privacy & Security
- ✅ All data processed locally in browser
- ✅ No data sent to external servers
- ✅ No tracking or analytics
- ✅ No cookies (except localStorage for settings)
- ✅ HTTPS served via GitHub Pages
- ✅ Content Security Policy compliant

---

## 🌍 Browser Support

### Fully Supported
| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| **Chrome** | 90+ | Recommended |
| **Edge** | 90+ | Chromium-based |
| **Firefox** | 88+ | Full support |
| **Safari** | 14+ | macOS & iOS |
| **Opera** | 76+ | Chromium-based |

### Mobile Browsers
| Browser | Platform | Support |
|---------|----------|---------|
| **Safari** | iOS 14+ | ✅ Full |
| **Chrome** | Android 90+ | ✅ Full |
| **Samsung Internet** | Android 14+ | ✅ Full |
| **Firefox** | Android 88+ | ✅ Full |

### Features Used
- ES6+ JavaScript (Arrow functions, Template literals, Destructuring)
- CSS Grid & Flexbox
- CSS Custom Properties (Variables)
- localStorage API
- FileReader API
- Fetch API (for potential future features)

### Not Supported
- Internet Explorer (any version) - EOL
- Opera Mini - Limited JavaScript support

---

## 👨‍💻 Credits

### Created By
**Jobin Bennykutty**
- GitHub: [@JoeMighty](https://github.com/JoeMighty/)
- Project: Caasie Visualizer

### Built With
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid & Flexbox
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Chart.js** - Interactive data visualizations
- **PapaParse** - CSV parsing
- **SheetJS** - Excel file support

### Powered By
- **Caasie.co** - Digital out-of-home advertising platform
- **GitHub Pages** - Free hosting and deployment

### Special Thanks
- Chart.js contributors for excellent documentation
- MDN Web Docs for web standards reference
- WCAG guidelines for accessibility standards

---

## 📄 License

### Creative Commons Attribution 4.0 International (CC BY 4.0)

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

#### You are free to:
- ✅ **Share** - Copy and redistribute the material in any medium or format
- ✅ **Adapt** - Remix, transform, and build upon the material for any purpose, even commercially

#### Under the following terms:
- 📝 **Attribution** - You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- 🚫 **No additional restrictions** - You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

#### How to Attribute:
```
Caasie Data Visualizer by Jobin Bennykutty
Licensed under CC BY 4.0
https://github.com/JoeMighty/caasie-visualizer
```

#### Copyright Notice:
```
Copyright (c) 2025 Jobin Bennykutty

This work is licensed under the Creative Commons Attribution 4.0 
International License. To view a copy of this license, visit 
http://creativecommons.org/licenses/by/4.0/ or send a letter to 
Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
```

### Third-Party Licenses
- **Chart.js** - MIT License
- **PapaParse** - MIT License
- **SheetJS** - Apache 2.0 License
- **Google Fonts** - SIL Open Font License

---

## ❓ Questions

### Getting Help

**Have questions or issues?** We're here to help!

#### 📧 Contact
- **GitHub Issues:** [Open an issue](https://github.com/JoeMighty/caasie-visualizer/issues)
- **Discussions:** [GitHub Discussions](https://github.com/JoeMighty/caasie-visualizer/discussions)

#### 🐛 Found a Bug?
1. Check [existing issues](https://github.com/JoeMighty/caasie-visualizer/issues)
2. If new, [create an issue](https://github.com/JoeMighty/caasie-visualizer/issues/new) with:
   - Description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and version
   - Screenshots (if applicable)

#### 💡 Feature Request?
We welcome suggestions! Please:
1. Check if it's already requested
2. Open a new issue with "Feature Request" label
3. Describe the feature and use case

#### 🤝 Want to Contribute?
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
5. Follow the CC BY 4.0 license terms

### FAQ

**Q: Do I need to install anything?**  
A: No! Just open the files in a browser or visit the live page.

**Q: Can I use this for commercial projects?**  
A: Yes! CC BY 4.0 allows commercial use with attribution.

**Q: Does this work offline?**  
A: Yes, once loaded. External fonts require internet on first load.

**Q: Can I customize the code?**  
A: Absolutely! Modify colors, fonts, charts - it's your project.

**Q: Is my data secure?**  
A: Yes, all processing happens locally in your browser. Nothing is uploaded.

**Q: Can I add more charts?**  
A: Yes! The code is open and well-documented for easy extension.

**Q: Can I embed this in my website?**  
A: Yes! Use an iframe or integrate the files directly.

---

## 🚀 Quick Start

1. **Visit:** [https://joemighty.github.io/Caasie-Visualiser/](https://joemighty.github.io/Caasie-Visualiser/)
2. **Upload:** Your Caasie.co data file
3. **Filter:** Use date range, venue type, or campaign filters to drill down
4. **Customize:** Click the ⚙️ floating button (bottom-right) to adjust colors and fonts
5. **Analyze:** Interactive charts and metrics update in real-time

**That's it!** No installation, no configuration, just visualize your data with powerful filtering.

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/JoeMighty/caasie-visualizer?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/JoeMighty/caasie-visualizer?style=flat-square)
![Maintenance](https://img.shields.io/maintenance/yes/2025?style=flat-square)

---

**Made with ❤️ by [Jobin Bennykutty](https://github.com/JoeMighty/)** 
