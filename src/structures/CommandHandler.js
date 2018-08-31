//bad brain

class CommandHandler {
	constructor(client) {
		this.client = client;
	}
	
	static get name() {return "handler"}
	
	async run(msg) {}
}

module.exports = CommandHandler;
