const connection = require("./connection");

//class for database
class DB {
    constructor(connection) {
        this.connection = connection;
    }

    //display dept table
    findDepartments() {
        const sql = `SELECT * FROM department`;
        return this.connection.promise().query(sql);
    }

    //display roles table
    findRoles() {
        const sql = `SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id`;
        return this.connection.promise().query(sql);
    }

    //display all employees
    findEmployees() {
        const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, manager.first_name AS managerFirst, manager.last_name AS managerLast FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id`;
        return this.connection.promise().query(sql);
    }

    //add department
    newDepartment(department) {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        return this.connection.promise().query(sql, department);
    }

    //add role
    newRole(role) {
        const sql = `INSERT INTO role (name)`
    }

    //add employee

    //update roll

    ///all queries go in here
}

module.exports = new DB(connection);
