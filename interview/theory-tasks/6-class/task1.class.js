class User {
  constructor(name, surname, pswd, level = 'guest') {
    this.name = name;
    this.surname = surname
    this.pswd = pswd;
    this.level = level;

    this.getFullName = function() {
      return (this.name + ' ' + this.surname);
    }
  }

  changePassword(oldPswd, newPswd) {
    if (oldPswd !== this.pswd) return false;
    this.pswd = newPswd;
    return true;
  }

  static generateEmptyUser() {
    return new User();
  }

  static generateArrayWithTwoEmptyUsers() { // using static generateEmptyUser
    return // [ User, User ]
  }
}

class Admin extends User {
  constructor(name, surname, pswd) { // SOLID crashed :(
    super(name, surname, pswd, 'admin');
  }

  static generateEmptyUser() {
    return new Admin();
  }
}

const admin = new Admin('ivan', 'petrov', 'pswd');

console.log(admin);

// Admin.generateArrayWithTwoEmptyUsers() // [ Admin, Admin ] ?