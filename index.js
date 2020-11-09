const { Client, Collection } = require("discord.js");
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER','REACTION'] });
const config = require("./config.json");
[client.config, client.commands] = [config, new Collection()];
eval(require("./handler_manager")(client));
client.login(config.token).then(() => console.log("Successfully logged in!"));