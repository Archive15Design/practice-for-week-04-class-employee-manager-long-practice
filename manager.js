const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager){
        super(name, salary,title, manager);
        this.employees = [];
    }

    addEmployee(employee){
        this.employees.push(employee);
    }

    _totalSubSalary(){
        let sum = 0;

        for (const employee of this.employees){

            if (employee instanceof Manager){
                sum += employee._totalSubSalary();
                sum += employee.salary;
            } else {
                sum += employee.salary;
            }
        }

        return sum;
    }

    calculateBonus(multiplier){
        let bonus = (this.salary + this._totalSubSalary()) * multiplier;
        return bonus;
    }

}

module.exports = Manager;
