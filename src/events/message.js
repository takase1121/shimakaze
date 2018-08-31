//message stuff

const EventHandler = require("../structures/EventHandler.js");


class message extends EventHandler {
	constructor(client) {
		super(client);
	}
	
	static get name() {return "message"}
	
	run(msg) {
		if (msg.author.bot) return;
		if (msg.channel.type !== "DEFAULT" && !["TextChannel"].includes(msg.channel.constructor.name)) return;
		
		if (!msg.content.startsWith(this.prefix)) return;
		
		const command = msg.content.split(" ")[0].substr(this.prefix.length).toLowerCase(),
			args = msg.content.split(" ").slice(1);
		
		if (!this.commands.has(command)) return;
		
		this.commands.get(command).run(msg).catch(x => console.log(`Error: ${x.trace || x}`));
	}
}

module.exports = message;