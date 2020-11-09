const { readdirSync } = require("fs");
module.exports = function (client) {
	readdirSync("./commands/").forEach(file => {
		if (!file.endsWith(".js")) return;
		let fileName = file.split(".")[0];
		client.commands.set(fileName, require(`../commands/${fileName}`));
		console.log(`Loaded the ${fileName} Command!`);
	});
	
	readdirSync("./events/").forEach(file => {
		if (!file.endsWith(".js")) return;
		let fileName = file.split(".")[0];
		client.on(fileName, require(`../events/${fileName}`).bind(null, client));
		console.log(`Loaded the ${fileName} Event!`);
	});
};