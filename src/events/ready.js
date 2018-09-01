//ready event

const EventHandler = require("../structures/EventHandler.js");


class ready extends EventHandler {
	constructor(client) {
		super(client);
	}
	
	async run() {
		console.log("The bot has started.");
	}
}

module.exports = ready;