const cooldown = new Set();
module.exports = function (client, message) {
	if (message.author.bot || message.guild) return;
	if (!message.content.startsWith(client.config.prefix)) return;

	let command_name = message.content.toLowerCase().slice(client.config.prefix.length).trim().split(" ")[0]
	if (!client.commands.has(command_name)) return;
	cooldown.add(message.author.id);
	setTimeout(() => {cooldown.delete(message.author.id)}, client.config.cooldown);
	client.commands.get(command_name)(client, message);
};