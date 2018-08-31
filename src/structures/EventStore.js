//stores events

const Store = require("./Store.js");


class EventStore extends Store {
	constructor(client, iterator) {
		super(client, iterator);

		this.listenerList = [];
	}

	loadFile(path) {
		const buf = require(path);

		this.listenerList.push(buf.name);
		this.client.on(buf.name, new buf(this.client));
	}

	delete(key) {
		if (this.listenerList.includes(key)) {
			this.client.removeAllListeners(key);
		} else {
			return null;
		}
	}
	
	clear() {
		for (const elem of this.listnerList) {
			this.client.removeAllListeners(this.client);
		}
		
		this.listenerList.length = 0;
	}
}

module.exports = EventStore;