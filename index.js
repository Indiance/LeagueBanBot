// importing the necessary stuff
const { Client, Intents } = require('discord.js');
const { discordtoken } = require('./config.json');

// initialising the stuff
const intents = new Intents(32767);
const client = new Client({ intents });

// running the bot
client.login(discordtoken);
