//handle events

class EventHandler {
	constructor(client) {
		this.client = client;
	}
	
	static get name() {return "handler"}
	
	async run(...args) {}
}

module.exports = EventHandler;