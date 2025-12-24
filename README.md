# 🚀 Caasie Data Visualizer - Separate Files Version

## 📁 Files Included

```
├── index.html    (HTML structure)
├── style.css     (All styling)
└── script.js     (All functionality + sample data)
```

## ✨ Features

✅ **Upload CSV/Excel files** from Caasie.co  
✅ **8 key metrics** - Plays, Audience, Cost, CPP, Boards, Venues, Screen Time, Days  
✅ **5 interactive charts**:
   - Daily Performance (dual Y-axis line chart)
   - Venue Distribution (doughnut chart)
   - Cost Analysis (bar chart)
   - Screen Time Distribution (bar chart)
   - Top 10 Boards by Audience (horizontal bar chart)
✅ **Top Boards Table** - Sortable performance table  
✅ **Color customization** - 5 brand colors  
✅ **Font selector** - 15 Google Fonts  
✅ **Chart toggles** - Show/hide any chart  
✅ **Settings persistence** - Saved in localStorage  
✅ **Fully responsive** - Mobile, tablet, desktop  
✅ **WCAG compliant** - Accessible for all users  
✅ **Sample data** - 50 records from Caasie.co included  

## 🌐 Deploy to GitHub Pages (3 minutes)

### Method 1: Upload via GitHub Website

1. **Create repository:**
   - Go to https://github.com/new
   - Name: `caasie-visualizer`
   - Visibility: Public
   - Click "Create repository"

2. **Upload files:**
   - Click "uploading an existing file"
   - Drag all 3 files: `index.html`, `style.css`, `script.js`
   - Commit message: "Add visualizer"
   - Click "Commit changes"

3. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: `main` branch
   - Folder: `/ (root)`
   - Click "Save"

4. **Visit your site:**
   ```
   https://YOUR_USERNAME.github.io/caasie-visualizer/
   ```

### Method 2: Using Git

```bash
# Create folder and add files
mkdir caasie-visualizer
cd caasie-visualizer
# Copy index.html, style.css, script.js into this folder

# Initialize and push
git init
git add .
git commit -m "Add Caasie visualizer"
git remote add origin https://github.com/YOUR_USERNAME/caasie-visualizer.git
git push -u origin main

# Enable GitHub Pages in Settings → Pages
```

## 🎨 Customization

### Default Colors
- Primary: #3bd62b
- Primary Light: #d6ffd2
- Background: #001a23
- Accent Yellow: #fece00
- Accent Blue: #18265e

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

## 📊 Required Data Format

Your Caasie.co file must include these columns:

- Campaign
- Date (UTC)
- Board
- Venue Type
- Total Plays
- Total Audience
- Total Cost (Your Currency)
- Total Screen Time (secs)

Optional columns:
- Latitude
- Longitude
- Average CPP (Your Currency)

## 🔄 How to Update

### Via GitHub Website:
1. Go to your repository
2. Click on the file you want to edit
3. Click the pencil icon (edit)
4. Make changes
5. Click "Commit changes"

### Via Git:
```bash
# Make changes to files locally
git add .
git commit -m "Updated visualizer"
git push origin main
```

Site updates automatically in 1-2 minutes!

## 💡 Usage

1. **Open the site** - Visit your GitHub Pages URL
2. **Upload data** - Drag & drop or click upload zone
3. **Customize** - Click "⚙️ Customize" button
   - Change colors
   - Select fonts
   - Toggle charts on/off
4. **Analyze** - View metrics and interactive charts
5. **Settings saved** - Your preferences are remembered

## 🛠️ Local Testing

1. **Open `index.html`** in your browser
2. All features work offline
3. Upload your own Caasie.co files
4. Customizations are saved to browser

## 📱 Responsive Breakpoints

- **Mobile** (< 768px): Stacked layout, 2-column metrics
- **Tablet** (768-1024px): 2-column charts, 3-column metrics
- **Desktop** (> 1024px): Full bento grid, all features

## ♿ Accessibility

- Keyboard navigation supported
- Screen reader compatible
- WCAG 2.1 AA compliant
- High contrast mode support
- Reduced motion support
- Proper ARIA labels
- Focus indicators

## 🔧 No Build Process Needed

- ❌ No npm install
- ❌ No package.json
- ❌ No node_modules
- ❌ No webpack/vite/build tools

Just **3 files** that work immediately!

## 📦 File Sizes

- `index.html`: ~10 KB
- `style.css`: ~13 KB
- `script.js`: ~43 KB (includes sample data)

**Total**: ~66 KB

## 🌟 External Dependencies

Loaded via CDN (no download needed):

- **Chart.js 4.4.0** - Interactive charts
- **PapaParse 5.4.1** - CSV parsing
- **SheetJS 0.18.5** - Excel parsing
- **Google Fonts** - Poppins + user-selected fonts

## 🎯 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Credits

Created by [Jobin Bennykutty](https://github.com/JoeMighty/)

Powered by Caasie.co

## 📄 License

Free to use for personal and commercial projects.

---

**Questions?** Open an issue on GitHub

**Time to deploy**: 3 minutes  
**Files to upload**: 3  
**Build process**: 0  
**Dependencies**: 0 (all via CDN)  

**You're ready to go!** 🚀
