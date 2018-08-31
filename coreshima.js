//shimakaze core

const {Client} = require("discord.js"),
	{join} = require("path"),
	fs = require("fs"),
	CommandStore = require("./src/structures/CommandStore.js"),
	EventStore = require("./src/structures/EventStore.js"),
	config = JSON.parse(fs.readFileSync("config.json"));


class Shimakaze extends Client {
	constructor(token, prefix, settings) {
		super(settings);
		
		this.prefix = prefix;
		this.commands = new CommandStore(this);
		this.events = new EventStore(this);
		
		this.commands.loadAllFiles(join(process.cwd(), "src/commands"));
		this.events.loadAllFiles(join(process.cwd(), "src/events"));
		
		this.login(token);
	}
}

new Shimakaze(config.token, config.prefix, config.settings);
