// importing the necessary stuff
const { Client, Intents, Presence } = require('discord.js');
const { discordtoken } = require('./config.json');

// initialising the stuff
const intents = new Intents(32767);
const client = new Client({ intents });

// running the bot
client.login(discordtoken);
client.on("ready", () => {
    client.user.setPresence({ activities: [{ name: 'Banning LoL players' }], status: 'online' });
});

/*
Gameplan:
check if league of legends is one of them
if it is, ban
Thats literally it
*/

client.on("presenceUpdate", (oldPresence, newPresence) => {
	try {
		activityNames = [];
		newPresence.activities.forEach(activity => {
			activityNames.push(activity.name);
		});
		console.log(activityNames);
	}
	catch {
		console.log('undefined');
	}
})