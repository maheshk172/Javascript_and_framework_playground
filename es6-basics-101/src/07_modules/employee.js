
//If we want to hide any property, we need to use 'Symbol'
//nobody can change the name property
let s_name = Symbol();

export class Employee {
    constructor(name) {
        //this._name = name;
        this[s_name] = name;
    }

    get name() {
        return this[s_name];
        //return this._name;
    }

    doWork() {
        return `${this.name} is working`;
    }
}


export let log = function (employee) {
    console.log(employee.name);
}

export let defaultRaise = 0.03;

export let modelEmployee = new Employee("Allen");