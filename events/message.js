module.exports = function (client, message) {
	if (message.author.bot || !message.guild) return;
	if (!message.content.startsWith(client.config.prefix)) return;

	let command_name = message.content.toLowerCase().slice(client.config.prefix.length).trim().split(" ")[0];

	if (!client.commands.has(command_name)) return;
	
	client.cooldown.add(message.author.id);
	setTimeout(() => { client.cooldown.delete(message.author.id) }, client.config.cooldown * 1000);

	client.commands.get(command_name)(client, message);
};