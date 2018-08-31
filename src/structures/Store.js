//command / event store with internal load stuff probably

const {readdirSync, statSync} = require("fs"),
	{join} = require("path");


class Store extends Map {
	constructor(client, iterator) {
		super(iterator);
		
		this.client = client;
	}
	
	loadFile(path) {
		//dummy function
		//more dummy functions to come
	}
	
	loadAllFiles(dir) {
		const validFiles = readdirSync(dir).filter(x => x.endsWith(".js"))
			.map(x => join(dir, x))
			.map(x => {return {n: x, s: statSync(x)}})
			.filter(x => x.s.isFile());
		for (const elem of validFiles) {
			this.loadFile(elem.n);
		}
	}
}

module.exports = Store;