//ready event

const EventHandler = require("../structures/EventHandler.js");


class ready extends EventHandler {
	constructor(client) {
		super(client);
	}
	
	static get name() {return "ready"}
	
	async run() {
		console.log("The bot has started.");
	}
}

module.exports = ready;