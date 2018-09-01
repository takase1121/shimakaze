//ping command

const CommandHandler = require("../structures/CommandHandler.js");


class Ping extends CommandHandler {
	constructor(client) {
		super(client);
	}
	
	
	async run(msg) {
		await msg.channel.send({
			embed: {
				title: "Ping",
				description: `Teitoku, the current ping is **${this.client.ping}** ms.`,
				color: 0x138d75
			}
		});
	}
}

module.exports = Ping;