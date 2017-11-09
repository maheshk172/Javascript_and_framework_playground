import {Employee} from "./employee.js";

export default class Company {
    hire(...name) {
        this.employees = name.map(n => new Employee(n));
    }

    doWork() {
        //this does not worked on chrome latest
        //return [for (let e of this.employees) e.doWork()];
        let result = [];
        for(let e of this.employees) {
            result.push(e.doWork() + "<br>");
        }
        return result;
    }
}