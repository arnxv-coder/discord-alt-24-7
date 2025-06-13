require("dotenv").config(); // <-- Load .env before anything

const { Client } = require("discord.js-selfbot-v13");
const express = require("express");

const app = express();
app.get("/", (_, res) => res.send("Bot is running"));
app.listen(3000, () => console.log("Web server running"));

const client = new Client();

client.on("ready", () => {
  console.log(`✅ Logged in as ${client.user.username}`);
});

client.login(process.env.TOKEN);
