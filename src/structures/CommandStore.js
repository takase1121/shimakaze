const Store = require("./Store.js");


class CommandStore extends Store {
	constructor(client, iterator) {
		super(client, iterator);
	}
	
	loadFile(path) {
		const buf = require(path);
		this.set(buf.name, new buf(this.client));
	}
}