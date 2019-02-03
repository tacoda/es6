class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  // static register(username, email) {
  //   return new User(username, email);
  // }

  static register(...args) {
    return new User(...args);
  }

  get foo() {
    return 'foo';
  }

  set foo(bar) {
    // foo = bar
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

let user = User.register('Bob', 'bob@example.com');
// user.changeEmail('foo@example.com');
// console.log(user.email);
console.dir(user);
console.dir(user.foo);
