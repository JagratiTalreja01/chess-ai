# Dr. J's Chess Arena — Starter Template

This package creates the new landing page while preserving the original chess engine.

## Important: preserve the original chess page

Before copying the starter files into your repository:

1. In your existing `chess-ai` repository, rename the current `index.html` to:

   ```
   play.html
   ```

2. Do **not** delete the existing JavaScript, CSS, chess piece images, or library files used by the original project.

3. Copy the new starter files into the repository root. The new `index.html` becomes the homepage, while `play.html` remains the chess AI page.

## Copy these files

```
index.html
assets/logo.svg
css/theme.css
css/home.css
css/responsive.css
js/ui.js
```

## Test locally

From the repository folder, run:

```powershell
python -m http.server 8000
```

Then open:

```
http://localhost:8000
```

Test:

- Home page loads.
- “Play vs AI” opens `play.html`.
- Mobile navigation works.
- Animations appear while scrolling.
- “Schedule a Match” opens Calendly.

## Add your Calendly URL

Open:

```
js/ui.js
```

Replace:

```javascript
const CALENDLY_URL = "https://calendly.com/";
```

with your actual event link.

## Commit and push

```powershell
git status
git add .
git commit -m "Add Dr. J's Chess Arena landing page"
git push -u origin redesign-v2
```

After reviewing the branch, merge it into `main` so GitHub Pages publishes the new homepage.
