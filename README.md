# BIKASH ARTISTRY — Dark Crimson & Pitch-Black Portfolio

Minimalist, high-performance portfolio website built for **BIKASH ARTISTRY** (2D Animator & Traditional Portrait Artist).

---

## 🩸 Aesthetic & Design System
- **Theme:** Dark Crimson & Pitch-Black ('Bloody' Gothic / Dark Anime Aesthetic)
- **Background:** Dynamic 60 FPS HTML5 Canvas particle system simulating floating glowing red embers and atmospheric blood-mist vignettes.
- **Typography:** Cinematic serif (`Cinzel`) paired with sharp modernist sans-serif (`Space Grotesk`).
- **Showcase:** Pure CSS 9:16 vertical video cards with seamless autoplay, muted loops, zero intrusive player buttons, and no fullscreen popups.

---

## 📁 Project Structure

```text
bikash-artistry-portfolio/
├── index.html                   # Core semantic layout & dynamic DOM rendering
├── data.js                      # Central content data file (easy updates)
├── style.css                    # Dark crimson & pitch-black styling & animations
├── GUILT ANIMATION CLIP.mp4     # 9:16 vertical short
├── DIWALI SPECIAL ANIMATION.mp4 # 9:16 vertical short
├── SLEEP PARALYSIS.mp4          # 9:16 vertical short
└── README.md                    # Documentation & guide
```

---

## ⚡ How to Open & Preview

### Option 1: Direct File
Double-click `index.html` or open it directly in any modern browser (Chrome, Edge, Brave, Firefox):
```text
file:///C:/Users/bikas/.gemini/antigravity/scratch/bikash-artistry-portfolio/index.html
```

### Option 2: Local Live Server (Recommended)
From the project folder in terminal:
```bash
npx serve .
# or
npx live-server
```
Then open `http://localhost:3000` or `http://localhost:8080`.

---

## 🛠️ How to Update Content (via `data.js`)

All website content is driven dynamically from `data.js`. You do **not** need to touch `index.html` to update text or add items.

- **To update Hero/Bio:** Edit `PORTFOLIO_DATA.hero` in `data.js`.
- **To add/edit Work Experience:** Edit or add objects in `PORTFOLIO_DATA.experience`.
- **To add/edit Skills:** Edit `PORTFOLIO_DATA.skills`.
- **To add/change 9:16 Videos:** Place your `.mp4` file in this directory and update `PORTFOLIO_DATA.animationShorts`.
- **To update Contact / Socials:** Edit `PORTFOLIO_DATA.contact`.
