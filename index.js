const { Client } = require("discord.js-selfbot-v13");
const express = require("express");

const app = express();
app.get("/", (_, res) => res.send("Bot is running"));
app.listen(3000, () => console.log("Web server running"));

// 🔧 Add this line to skip broken patching
process.env.DISCORD_SELFBOT_DISABLE_SETTINGS_PATCH = "true";

const client = new Client();

client.on("ready", () => {
  console.log(`✅ Logged in as ${client.user.username}`);
});

// ⛔ NEVER hardcode token; set as environment variable in Render settings
client.login(process.env.TOKEN);
