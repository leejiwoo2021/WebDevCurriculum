const users = new Map();

users.set('test1', 'qwer1234');
users.set('test2', 'qwer1234');
users.set('test3', 'qwer1234');

function auth(id, pw) {
  if (users.has(id) && users.get(id) === pw) return true;
  return false;
}

exports.auth = auth;
