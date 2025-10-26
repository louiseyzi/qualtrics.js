# Quick Start Guide - Set Up Qualtrics in 5 Minutes

Your experiment is already deployed! Follow these steps to embed it in Qualtrics.

---

## ✅ Your Experiment is Live!

**Live URL:** https://louiseyzi.github.io/qualtrics.js/

**GitHub Repo:** https://github.com/louiseyzi/qualtrics.js

### To Update Your Files:

```bash
cd /Users/yunzilu/socialmedia
git add .
git commit -m "Your update message"
git push origin master
```

Wait 1-2 minutes for GitHub Pages to update.

---

### Set Up Qualtrics (5 minutes)

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
3. Paste this code:

```html
<div id="social-media-task">
  <iframe
    id="experiment-iframe"
    src="https://louiseyzi.github.io/qualtrics.js/index.html?c=${e://Field/condition}&p=${e://Field/ResponseID}"
    width="100%"
    height="850px"
    frameborder="0"
    style="border: none; overflow: hidden;">
  </iframe>
</div>
```

4. Click on question → **⚙️** → **JavaScript**
5. Paste code from `QUALTRICS_QUESTION_JAVASCRIPT.js`
6. **Save**

---

### Test Your Survey (2 minutes)

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
