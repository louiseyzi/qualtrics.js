# Qualtrics Deployment Guide for Social Media Ostracism Paradigm

This guide provides step-by-step instructions to deploy the Social Media Ostracism paradigm in Qualtrics.

---

## Overview

The deployment involves:
1. Hosting the experiment files on GitHub Pages (free)
2. Embedding the experiment in Qualtrics via iframe
3. Capturing experiment data as Qualtrics embedded data
4. Using the data in your survey

---

## PART 1: Deploy to GitHub Pages (Hosting the Files)

### Step 1: Prepare Your Repository

Your files are already set up! The main.js has been modified to work with Qualtrics.

### Step 2: Push to GitHub (if not already done)

**If you haven't created a GitHub repository yet:**

1. Go to https://github.com and log in
2. Click the "+" icon (top right) → "New repository"
3. Name it: `socialmedia` (or any name you prefer)
4. Keep it **Public** (required for GitHub Pages)
5. Click "Create repository"

**In your terminal, run these commands:**

```bash
cd /Users/yunzilu/socialmedia
git remote add origin https://github.com/YOUR-USERNAME/socialmedia.git
git branch -M main
git push -u origin main
```

*(Replace YOUR-USERNAME with your GitHub username)*

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select:
   - Branch: `main` or `master`
   - Folder: `/ (root)`
5. Click **Save**

**Wait 2-5 minutes** for deployment to complete.

### Step 4: Get Your Live URL

Your experiment will be available at:
```
https://YOUR-USERNAME.github.io/socialmedia/
```

**Test it!** Open this URL in your browser to make sure everything works.

---

## PART 2: Set Up Qualtrics Survey

### Step 5: Create Embedded Data Fields

1. Open your Qualtrics survey
2. Click **Survey Flow** (top menu)
3. Click **Add a New Element Here** → **Embedded Data**
4. Add these fields (click "Add a New Field" for each):
   - `participant`
   - `condition`
   - `username`
   - `avatar`
   - `description`

5. **Important:** Move this Embedded Data block to the **TOP** of your survey flow (before any questions)

### Step 6: Randomize Condition (Optional but Recommended)

To randomly assign participants to conditions:

1. In **Survey Flow**, click **Add a New Element Here** → **Randomizer**
2. Set to "Evenly Present Elements"
3. Inside the randomizer, add 3 **Embedded Data** blocks:
   - Block 1: Set `condition = 1` (Ostracism - 1 like)
   - Block 2: Set `condition = 2` (Inclusion - 6 likes)
   - Block 3: Set `condition = 3` (Over-inclusion - 9 likes)

Your Survey Flow should look like:
```
Randomizer (Evenly Present)
  └─ Embedded Data: condition = 1
  └─ Embedded Data: condition = 2
  └─ Embedded Data: condition = 3
Embedded Data: participant, username, avatar, description
Block: Default Question Block
```

### Step 7: Create the Experiment Question

1. Click **Create a New Question**
2. Change question type to **Text/Graphic**
3. Click the **</>** (HTML View) button in the question editor
4. **Delete all existing text** and paste this code:

```html
<div id="social-media-task">
  <iframe
    id="experiment-iframe"
    src="https://YOUR-USERNAME.github.io/socialmedia/index.html?c=${e://Field/condition}&p=${e://Field/ResponseID}"
    width="100%"
    height="850px"
    frameborder="0"
    style="border: none; overflow: hidden;">
  </iframe>
</div>

<style>
  /* Hide Qualtrics question container styling */
  #social-media-task {
    margin: 0;
    padding: 0;
  }
</style>
```

**Important:** Replace `YOUR-USERNAME` with your actual GitHub username!

### Step 8: Add JavaScript to the Question

1. Click on the **question** you just created
2. Click the **gear icon** (⚙️) → **JavaScript**
3. **Delete the default code** and paste this:

```javascript
Qualtrics.SurveyEngine.addOnload(function() {
    // Hide Qualtrics navigation buttons
    // The experiment will auto-advance when complete
    this.hideNextButton();
    this.hidePreviousButton();
});

Qualtrics.SurveyEngine.addOnReady(function() {
    console.log("Social Media Ostracism task loaded");
    console.log("Condition: " + "${e://Field/condition}");
});

Qualtrics.SurveyEngine.addOnUnload(function() {
    // This runs when moving to next question
    console.log("Task completed - Data saved:");
    console.log("Participant: " + "${e://Field/participant}");
    console.log("Condition: " + "${e://Field/condition}");
    console.log("Username: " + "${e://Field/username}");
    console.log("Avatar: " + "${e://Field/avatar}");
    console.log("Description: " + "${e://Field/description}");
});
```

4. Click **Save**

---

## PART 3: Test Your Setup

### Step 9: Preview Your Survey

1. Click **Preview Survey** (top right in Qualtrics)
2. Complete the experiment:
   - Choose username
   - Select avatar
   - Write description (140-400 characters)
   - Wait 3 minutes (or change `tasklength` in main.js for testing)
3. The survey should automatically advance to the next question

### Step 10: Check Data Collection

1. Go to **Data & Analysis** tab
2. View your test response
3. Verify these columns exist and contain data:
   - `participant`
   - `condition`
   - `username`
   - `avatar`
   - `description`

---

## PART 4: Customize Settings (Optional)

### Adjust Experiment Parameters

Edit `main.js` (lines 14-56) to customize:

**Task Duration:**
```javascript
settings.tasklength = 180000; // 3 minutes (in milliseconds)
// For testing: use 30000 (30 seconds)
```

**Number of Avatars:**
```javascript
settings.numberofavatars = 10;
// Make sure you have corresponding avatar images
```

**Likes per Condition:**
```javascript
// Condition 1 (Ostracism): 1 like
settings.condition_1_likes = [12000, 9999999];

// Condition 2 (Inclusion): 6 likes
settings.condition_2_likes = [10000, 15000, 35000, 80000, 132000, 150000];

// Condition 3 (Over-inclusion): 9 likes
settings.condition_3_likes = [10000, 11000, 15000, 35000, 80000, 100000, 110000, 150000, 20000];
```

After making changes:
1. **Save the file**
2. **Commit and push to GitHub:**
   ```bash
   git add main.js
   git commit -m "Updated experiment settings"
   git push
   ```
3. **Wait 1-2 minutes** for GitHub Pages to update

---

## PART 5: Add Follow-up Questions

After the experiment question, you can reference the collected data:

**Example: Display username in a question**
```
Thank you, ${e://Field/username}!

How included did you feel during the task?
```

**Example: Piped text in questions**
```
You received ${e://Field/condition} condition.
```

You can also use the data for:
- **Display logic** (show different questions based on condition)
- **Survey flow logic**
- **Quota management**
- **Data analysis** (export with your survey data)

---

## Troubleshooting

### Problem: Iframe doesn't load / blank screen
**Solution:**
- Check your GitHub Pages URL is correct
- Make sure repository is **Public**
- Wait 5 minutes after enabling GitHub Pages

### Problem: Data not saving to Qualtrics
**Solution:**
- Verify embedded data fields are in Survey Flow
- Check JavaScript console for errors (F12 in browser)
- Ensure main.js was properly modified

### Problem: Task doesn't auto-advance
**Solution:**
- Make sure you're using the modified main.js
- Check that Next button is hidden in question JavaScript
- Verify iframe can access parent window (security settings)

### Problem: Avatar images not loading
**Solution:**
- Ensure `avatars` folder is pushed to GitHub
- Check avatar file names match: `avatar_0.png`, `avatar_1.png`, etc.
- Verify images are 250x250 pixels

---

## Data Export

Your Qualtrics data export will include:

| Column | Description | Example |
|--------|-------------|---------|
| participant | Participant ID | Response ID from Qualtrics |
| condition | Experimental condition | 1, 2, or 3 |
| username | Chosen username | "Alex123" |
| avatar | Avatar number | "5" |
| description | Self-description text | "I love hiking and..." |

---

## Tips for Running the Study

1. **Test thoroughly** before launching
2. **Use a pilot sample** to check timing and data collection
3. **Consider shortening task length** for testing (30-60 seconds)
4. **Monitor data collection** in the first few responses
5. **Add attention checks** in follow-up questions
6. **Include manipulation checks** asking about number of likes received

---

## Support & Citation

**Original Paradigm:**
Wolf, W., Levordashka, A., Ruff, J. R., Kraaijeveld, S., Lueckmann, J.-M., & Williams, K. D. (2014). Ostracism Online: A social media ostracism paradigm. *Behavior Research Methods.* [doi:10.3758/s13428-014-0475-x](http://dx.doi.org/10.3758/s13428-014-0475-x)

**Documentation:**
http://smpo.github.io/socialmedia/

---

## Quick Reference Card

### Your URLs
- **GitHub Repo:** `https://github.com/louiseyzi/qualtrics.js`
- **Live Experiment:** `https://louiseyzi.github.io/qualtrics.js/`
- **Qualtrics Embed URL:** `https://louiseyzi.github.io/qualtrics.js/index.html?c=${e://Field/condition}&p=${e://Field/ResponseID}`

### Embedded Data Fields
- `participant`
- `condition` (1, 2, or 3)
- `username`
- `avatar`
- `description`

### Conditions
- **1** = Ostracism (1 like)
- **2** = Inclusion (6 likes)
- **3** = Over-inclusion (9 likes)

---

**You're all set! Good luck with your research!**
