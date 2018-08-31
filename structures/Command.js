//command

class Command {
    constructor(client, msg, docs, action) {
        this.client = client;
        this.msg = msg;
        this.docs = docs;
        this.action = action;
    }
}
