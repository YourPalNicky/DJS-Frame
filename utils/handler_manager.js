const { readdirSync } = require("fs");
module.exports = function (client) {
	let commands = readdirSync("./commands/").filter(x => x.endsWith(".js")).map(x => x.split(".")[0]);
	let events = readdirSync("./events/").filter(x => x.endsWith(".js")).map(x => x.split(".")[0]);

	commands.forEach(file => {
		client.commands.set(file, require(`../commands/${file}`));
		console.log(`Initialized ${file} Command`);
	});

	events.forEach(file => {
		client.on(file, require(`../events/${file}`).bind(null, client));
		console.log(`Initialized ${file} Event`);
	});
};