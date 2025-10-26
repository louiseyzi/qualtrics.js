# Quick Start Guide - Deploy to Qualtrics in 10 Minutes

Follow these steps to get your experiment running in Qualtrics quickly.

---

## ✅ Checklist

### Step 1: Push to GitHub (5 minutes)

```bash
# If you haven't already initialized git
cd /Users/yunzilu/socialmedia
git add .
git commit -m "Qualtrics-ready version"

# Create a new repo on GitHub.com (make it PUBLIC!)
# Then run:
git remote add origin https://github.com/YOUR-USERNAME/socialmedia.git
git push -u origin main
```

### Step 2: Enable GitHub Pages (2 minutes)

1. Go to your repo: `https://github.com/YOUR-USERNAME/socialmedia`
2. Click **Settings** → **Pages**
3. Source: Select `main` branch, `/ (root)` folder
4. Click **Save**
5. **Wait 3 minutes** for it to deploy

Your URL will be: `https://YOUR-USERNAME.github.io/socialmedia/`

---

### Step 3: Set Up Qualtrics (3 minutes)

#### A. Survey Flow
1. Go to **Survey Flow**
2. Add **Embedded Data** (top of flow):
   - Fields: `participant`, `condition`, `username`, `avatar`, `description`
3. Add **Randomizer** (optional, for random assignment):
   - Block 1: Set `condition = 1`
   - Block 2: Set `condition = 2`
   - Block 3: Set `condition = 3`
4. Click **Apply**

#### B. Create Question
1. Add **Text/Graphic** question
2. Click **</>** (HTML view)
3. Paste code from `QUALTRICS_QUESTION_HTML.html`
4. **Replace YOUR-USERNAME** with your GitHub username
5. Click on question → **⚙️** → **JavaScript**
6. Paste code from `QUALTRICS_QUESTION_JAVASCRIPT.js`
7. **Save**

---

### Step 4: Test (2 minutes)

1. Click **Preview Survey**
2. Complete the task
3. Check **Data & Analysis** to verify data saved

**Done!** 🎉

---

## What Gets Saved to Qualtrics

When participants complete the task, this data is automatically saved:

- **participant** - Qualtrics Response ID
- **condition** - 1, 2, or 3 (ostracism, inclusion, over-inclusion)
- **username** - Username they entered
- **avatar** - Avatar number they selected (0-9)
- **description** - Text description they wrote

---

## URLs to Remember

**Live Experiment:**
```
https://louiseyzi.github.io/qualtrics.js/
```

**Qualtrics Embed URL (with parameters):**
```
https://louiseyzi.github.io/qualtrics.js/index.html?c=${e://Field/condition}&p=${e://Field/ResponseID}
```

---

## Common Issues

❌ **Blank iframe in Qualtrics**
- Check GitHub repo is PUBLIC
- Verify GitHub Pages URL works in browser
- Wait 5 minutes after enabling Pages

❌ **Data not saving**
- Make sure embedded data fields are in Survey Flow
- Check main.js was modified correctly
- Open browser console (F12) to check for errors

❌ **Avatar images not showing**
- Ensure avatars folder was pushed to GitHub
- Check file names: `avatar_0.png`, `avatar_1.png`, etc.

---

## For Testing: Shorten Task Time

To test quickly, edit `main.js` line 31:

```javascript
// Change from 3 minutes to 30 seconds
settings.tasklength = 30000;
```

Then push to GitHub:
```bash
git add main.js
git commit -m "Shorter task for testing"
git push
```

Wait 1 minute for GitHub Pages to update.

---

## Need More Details?

See the complete guide: `QUALTRICS_DEPLOYMENT_GUIDE.md`

---

**Ready to deploy? Start with Step 1! 🚀**
