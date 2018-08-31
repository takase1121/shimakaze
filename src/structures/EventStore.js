//stores events

const Store = require("./Store.js");


class EventStore extends Store {
	constructor(client, iterator) {
		super(client, iterator);
	}
	
	loadFile(path) {
		const buf = require(path);
		this.set(buf.name, new buf(this.client));
	}
}