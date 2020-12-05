require("dotenv").config( { path: "./config/.env" } );
const { Client, Collection } = require("discord.js");
const config = require("./config/config.json");

const client = new Client({ 
	ws: ["GUILDS", "GUILD_EMOJIS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
	partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION', "USER"]
});

client.commands = new Collection();
client.cooldown = new Set();
client.config = config;

eval(require("./utils/handler_manager")(client));

client.login(process.env.BOT_TOKEN).then(() => console.log("Successfully logged in!"));