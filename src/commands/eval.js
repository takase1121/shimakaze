//help me

const CommandHandler = require("../structures/CommandHandler.js"),
	{inspect} = require("util");


class Eval extends CommandHandler {
	constructor(client) {
		super(client);
		
	}
	
	async run(msg, args) {
		if (!this.tokenRegex) this._makeRegex();
		
		let result;
		try {
			result = eval(args);
		} catch (err) {
			if (err) result = `asciidoc\n[Error]\n${err.trace || err.message}`;
		}
		
		if (typeof result !== "string") result = inspect(result);
		result = result.length > 1993 ? result.slice(0, 1990) + "..." : result;
		result = result.replace(this.tokenRegex, "No token to you!");

		msg.channel.send({
			embed: {
				title: "Evaluation Complete.",
				description: `\`\`\`${result}\`\`\``,
				color: 0x2471a3
			}
		})
	}
	
	_makeRegex() {
		let temparr = [];
		for (let i = 0; i < this.client.token.length; i++) {
			temparr.push(`\\x${this.client.token.charCodeAt(i).toString(16)}`);
		}
		this.tokenRegex = new RegExp(temparr.join(""), "g");
	}
}

module.exports = Eval;