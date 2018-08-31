//bad brain

class CommandHandler {
	constructor(client) {
		this.client = client;
	}
	
	static get name() {return "handler"}
	
	async run(msg) {
		if (!msg.content.startsWith(this.client.prefix))  return;
		
		this.command = msg.content.split(" ")[0].substr(this.client.prefix.length).toLowerCase();
		this.args = msg.content.split(" ").slice(1);
		
		if (!this.commands.has(command)) return;
		
		this.commands.run(msg).catch(x => console.log(x.trace || x));
	}
}

module.exports = CommandHandler;
