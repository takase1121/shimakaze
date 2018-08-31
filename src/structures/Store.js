//command / event store with internal load stuff probably

const {readdirSync, fstatSync} = require("fs");


class Store extends Map {
	constructor(client, iterator) {
		super(iterator);
		
		this.client = client;
	}
	
	loadFile(path) {
		//dummy function
	}
	
	loadAllFiles(dir) {
		const validFiles = readdirSync(dir).filter(x => x.endsWith(".js")).map(x => {return {name:x, stats: fstatSync(x)}}).filter(x => x.stats.isFile());
		for (const elem of validFiles) {
			this.loadFile(elem);
		}
	}
}

module.exports = Store;