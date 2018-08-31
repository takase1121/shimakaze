//help me

class Store {
    constructor(path = [], ...args) {
        this.store = Object.create(null);
        this.args = args;

        if (Array.isArray(path) && path.length !== 0) {
            loadAllFile(path);
        }
    }

    get size() {
        return Object.keys(this.store).length;
    }

    loadFile(key, path) {
        const buf = require(path);
        this.store[buf.id] = new buf.payload (...this.args);
    }

    loadAllFile(path) {
        for (const elem of path) {
            const buf = require(elem);
            this.store[buf.id] = new buf.payload(...this.args);
        }
    }

    has(key) {
        if (Object.keys(this.store).includes(key)) return true else return false;
    }

    get(key) {
        if (!this.has(key)) return null;

        return this.store[key];
    }

    set(key, val) {
        this.store[key] = value;
        return this.store;
    }

    remove(key) {
        delete this.store[key];
    }

    clear() {
        for (const elem of Object.keys(this.store)) {
            delete this.store(elem);
        }
    }
}

module.exports = Store;
