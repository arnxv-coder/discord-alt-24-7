const { Client } = require("discord.js-selfbot-v13");
const express = require("express");

const client = new Client();
const app = express();

app.get("/", (_, res) => res.send("Selfbot alive!"));
app.listen(3000, () => console.log("Web server running"));

client.on("ready", () => {
  console.log(`✅ Logged in as ${client.user.username}`);
});

client.login(process.env.TOKEN);
