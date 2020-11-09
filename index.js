const { Client, Collection } = require("discord.js");
const client = new Client({ 
	ws: ["GUILDS", "GUILD_EMOJIS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
	partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION', "USER"]
});
const config = require("./config/config.json");
[client.config, client.commands] = [config, new Collection()];
require("dotenv").config( { path: "./config/.env" } );
eval(require("./utils/handler_manager")(client));
client.login(process.env.token).then(() => console.log("Successfully logged in!"));