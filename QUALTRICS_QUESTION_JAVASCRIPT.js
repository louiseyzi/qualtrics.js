/*
  QUALTRICS QUESTION JAVASCRIPT

  Instructions:
  1. Click on your question in Qualtrics
  2. Click the gear icon (⚙️) → JavaScript
  3. Delete all default code
  4. Copy and paste this entire code
  5. Click Save
*/

Qualtrics.SurveyEngine.addOnload(function() {
    // Hide Qualtrics navigation buttons
    // The experiment will auto-advance when complete
    this.hideNextButton();
    this.hidePreviousButton();

    // Optional: Log to console for debugging
    console.log("Social Media Ostracism task loaded");
    console.log("Condition assigned: " + "${e://Field/condition}");
    console.log("Participant ID: " + "${e://Field/ResponseID}");
});

Qualtrics.SurveyEngine.addOnReady(function() {
    // Task is ready
    console.log("Experiment iframe ready");
});

Qualtrics.SurveyEngine.addOnUnload(function() {
    // This runs when moving to next question
    // Log collected data (for debugging purposes)
    console.log("Task completed - Data captured:");
    console.log("├─ Participant: " + "${e://Field/participant}");
    console.log("├─ Condition: " + "${e://Field/condition}");
    console.log("├─ Username: " + "${e://Field/username}");
    console.log("├─ Avatar: " + "${e://Field/avatar}");
    console.log("└─ Description: " + "${e://Field/description}");
});
