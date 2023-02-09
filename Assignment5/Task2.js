class Employee {
    constructor(salary, hoursOfWork) {
      this._salary = salary;
      this._hoursOfWork = hoursOfWork;
    }
  
    get salary() {
      return this._salary;
    }
  
    set salary(salary) {
      this._salary = salary;
    }
  
    get hoursOfWork() {
      return this._hoursOfWork;
    }
  
    set hoursOfWork(hoursOfWork) {
      this._hoursOfWork = hoursOfWork;
    }
  
    getInfo() {
      return `Salary: $${this.salary} | Hours of work per day: ${this.hoursOfWork}`;
    }
  
    addSal() {
      if (this.salary < 500) {
        this.salary += 10;
      }
    }
  
    addWork() {
      if (this.hoursOfWork > 6) {
        this.salary += 5;
      }
    }
  }
  
  const employee1 = new Employee(450, 8);
  const employee2 = new Employee(600, 5);
  
  employee1.addSal();
  employee1.addWork();
  
  employee2.addSal();
  employee2.addWork();
  
  console.log(employee1.getInfo());
  console.log(employee2.getInfo());
  