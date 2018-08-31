//shimakaze core

const {Client} = require("discord.js"),
	{join} = require("path"),
	fs = require("fs"),
	Store = require("./structures/Store.js"),
	config = JSON.parse(fs.readFileSync("config.json"));


class Shimakaze extends Client {
	constructor(token, prefix, settings) {
		super(settings);
		
		this.prefix = prefix;
		this.commands = new Store(this);
		this.events = new Store(this);
		
		this.commands.loadAllFiles(join(process.cwd(), "commands"));
		this.events.loadAllFiles(join(process.cwd(), "events"));
		
		this.login(token);
	}
}

new Shimakaze(config.token, config.prefix, config.settings);
