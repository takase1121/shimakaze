//ping command

const CommandHandler = require("../structures/CommandHandler.js");

class Ping extends CommandHandler {
	constructor(client) {
		super(client);
	}
	
	static get name() {return "ping"}
	
	async run(msg) {
		await msg.channel.send(`Teitoku, the ping is **${this.client.ping}** ms.`);
	}
}

module.exports = Ping;