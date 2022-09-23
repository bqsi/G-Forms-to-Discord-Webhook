# G-Forms-to-Discord-Webhook

This code will listen to form submissions on Google Forms and send their responses to a Discord Webhook in the form of a customisable embed. It's free to get up and running and super easy to install for any Google Form.

## Installation

Navigate to your form in editing mode, and take note of the ID of the form.

In the link, `https://docs.google.com/forms/d/{THIS IS YOUR ID}/edit`.

You will need to manually input this into the script contained in this repository.

Now, make a webhook in whatever channel you'd like your responses to go to. [Discord has some good instructions on how to make one.](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)
Make sure you're not giving the webhook to anyone else who you don't want to be able to potentially @everyone in your Discord server. Take note of the webhook URL.

Go back to your form and click the three dots next to your Google account profile picture, and tap `Script editor` near the bottom of the drop-down menu.

Take out all existing code and paste in the code from `main.js`.
Replace any links that the code tells you to, CTRL+S to save and CTRL+F5 to refresh the page (and clear the cache of that page, just to avoid hiccups).

Next to "Debug", tap the drop-down menu and select "bindToSubmit". Now, press "Run".

## Usage

To test, submit a response to your Google Form. If all is well and you replaced the links correctly, a webhook should be posted to a channel.

This code is pretty "catch-all", since it toStrings the responses for safety. If anything breaks, you can make a GitHub issue and I'll see if I can get a fix for you.
