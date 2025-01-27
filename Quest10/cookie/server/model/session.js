class Session {
  constructor() {
    this.sessionData = new Map();
  }

  get(id) {
    if (this.sessionData.has(id)) return this.sessionData.get(id);

    return false;
  }

  set(id, value) {
    this.sessionData.set(id, value);
  }

  delete(id) {
    this.sessionData.delete(id);
  }
}

const session = new Session();

function getInstance() {
  return session;
}

exports.getInstance = getInstance;
