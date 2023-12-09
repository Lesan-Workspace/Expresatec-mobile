export class User {
  _id;
  firstname;
  lastname;
  username;
  email;
  password;
  _rol;

  constructor(firstname, lastname, username, email, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}