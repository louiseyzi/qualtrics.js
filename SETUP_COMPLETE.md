# ✅ Setup Complete!

Your Social Media Ostracism paradigm is ready to use in Qualtrics!

---

## 🌐 Your Live Experiment

**URL:** https://louiseyzi.github.io/qualtrics.js/

**GitHub Repository:** https://github.com/louiseyzi/qualtrics.js

---

## 📋 Next Steps: Add to Qualtrics

### Quick Setup (5 minutes)

Follow the instructions in **[QUICK_START.md](QUICK_START.md)** for a condensed guide.

### Detailed Setup

Follow the comprehensive instructions in **[QUALTRICS_DEPLOYMENT_GUIDE.md](QUALTRICS_DEPLOYMENT_GUIDE.md)** for step-by-step guidance.

---

## 🔧 What's Been Done

✅ Modified `main.js` to integrate with Qualtrics
✅ Fixed HTTPS mixed content issues for GitHub Pages
✅ Deployed to GitHub Pages at https://louiseyzi.github.io/qualtrics.js/
✅ Created ready-to-use Qualtrics HTML and JavaScript code

---

## 📦 Files Ready for Qualtrics

### 1. HTML Code for Question
File: **[QUALTRICS_QUESTION_HTML.html](QUALTRICS_QUESTION_HTML.html)**

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

### 2. JavaScript Code for Question
File: **[QUALTRICS_QUESTION_JAVASCRIPT.js](QUALTRICS_QUESTION_JAVASCRIPT.js)**

Copy the entire contents of this file into your Qualtrics question JavaScript.

---

## 📊 Data Collected

When participants complete the task, Qualtrics will capture:

| Field | Description | Example |
|-------|-------------|---------|
| `participant` | Qualtrics Response ID | R_abc123 |
| `condition` | Experimental condition | 1, 2, or 3 |
| `username` | Username entered | "Alex123" |
| `avatar` | Avatar number selected | "5" |
| `description` | Self-description text | "I love hiking..." |

---

## 🎯 Experimental Conditions

- **Condition 1:** Ostracism (1 like)
- **Condition 2:** Inclusion (6 likes)
- **Condition 3:** Over-inclusion (9 likes)

---

## 🔄 Updating Your Experiment

To make changes to the experiment:

1. Edit files locally (e.g., `main.js`, `index.html`, `style.css`)
2. Commit and push changes:
   ```bash
   cd /Users/yunzilu/socialmedia
   git add .
   git commit -m "Description of changes"
   git push origin master
   ```
3. Wait 1-2 minutes for GitHub Pages to update
4. Test at https://louiseyzi.github.io/qualtrics.js/

---

## ⚙️ Common Customizations

### Change Task Duration
Edit `main.js` line 31:
```javascript
settings.tasklength = 180000; // 3 minutes in milliseconds
// For testing: use 30000 (30 seconds)
```

### Change Number of Likes per Condition
Edit `main.js` lines 38-45:
```javascript
settings.condition_1_likes = [12000, 9999999]; // 1 like
settings.condition_2_likes = [10000, 15000, 35000, 80000, 132000, 150000]; // 6 likes
settings.condition_3_likes = [10000, 11000, 15000, 35000, 80000, 100000, 110000, 150000, 20000]; // 9 likes
```

### Change Number of Avatars
Edit `main.js` line 18:
```javascript
settings.numberofavatars = 10;
```

**Note:** Make sure you have corresponding avatar images in the `avatars/` folder named `avatar_0.png`, `avatar_1.png`, etc.

---

## 📚 Documentation Files

- **[QUICK_START.md](QUICK_START.md)** - 5-minute setup guide
- **[QUALTRICS_DEPLOYMENT_GUIDE.md](QUALTRICS_DEPLOYMENT_GUIDE.md)** - Comprehensive guide with troubleshooting
- **[QUALTRICS_QUESTION_HTML.html](QUALTRICS_QUESTION_HTML.html)** - Ready-to-paste HTML code
- **[QUALTRICS_QUESTION_JAVASCRIPT.js](QUALTRICS_QUESTION_JAVASCRIPT.js)** - Ready-to-paste JavaScript code

---

## 🆘 Need Help?

1. Check **[QUALTRICS_DEPLOYMENT_GUIDE.md](QUALTRICS_DEPLOYMENT_GUIDE.md)** for troubleshooting tips
2. Test your experiment at: https://louiseyzi.github.io/qualtrics.js/debug.html
3. Check browser console (F12) for error messages

---

## 📖 Citation

When using this paradigm, please cite:

Wolf, W., Levordashka, A., Ruff, J. R., Kraaijeveld, S., Lueckmann, J.-M., & Williams, K. D. (2014). Ostracism Online: A social media ostracism paradigm. *Behavior Research Methods.* [doi:10.3758/s13428-014-0475-x](http://dx.doi.org/10.3758/s13428-014-0475-x)

---

**Ready to use! 🎉**

Follow the instructions in [QUICK_START.md](QUICK_START.md) to add this to your Qualtrics survey.
