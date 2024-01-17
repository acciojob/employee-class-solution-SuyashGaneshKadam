class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  giveRaise(amount) {
    this.salary += amount;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  giveRaise(amount) {
    super.giveRaise(amount);
    console.log(`New salary for ${this.name} in ${this.department}: ${this.salary}`);
  }
}