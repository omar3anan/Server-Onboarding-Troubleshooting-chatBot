const express = require("express");
const router = express.Router();
const User = require("../models/user"); // Import your User model

// Route to render the response form
router.get("/response-form", (req, res) => {
  res.render("responseForm"); // Use your templating engine (e.g., EJS, Pug) to render the HTML
});

// Route to handle form submission
router.post("/response", async (req, res) => {
  const { email: userEmail, response: userResponse } = req.body;

  try {
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Update the user's response in the database
    user.response = userResponse;
    await user.save();

    res.status(200).send("Response submitted successfully");
  } catch (error) {
    console.error("Error submitting response:", error);
    res.status(500).send("Error submitting response");
  }
});

module.exports = router;
