class Employee {
    constructor(name, salary, title, manager){
        this.name = name;
        this.salary = salary;
        this.title = title;

        if (manager === undefined){
            this.manager = null;
        } else {
            this.manager = manager;
            this.manager.addEmployee(this);
        }
    }

    calculateBonus(multiplier){
        const bonus = this.salary * multiplier;
        return bonus;
    }
}

module.exports = Employee;
