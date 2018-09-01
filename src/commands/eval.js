//help me

const CommandHandler = require("../structures/CommandHandler.js");


class Eval extends CommandHandler {
	constructor(client) {
		super(client);
		
	}
	
	async run(msg) {
		if (this.tokenRegex) this.tokenRegex = new RegExp(this.client.token.split("").map(x => "\\x" + x.toString(16)).join(""), "g");
		console.log(this.tokenRegex.toString());
	}
}

module.exports = Eval;