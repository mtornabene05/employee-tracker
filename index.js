const inquirer = require("inquirer");
const consoletable = require("console.table");
const mySQL = require("mysql2");
const db = require("./db");

//opening directory prompts and responses
function mainMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "mainPrompt",
                message: "What would you like to do?",
                choices: [
                    {
                        name: "View All Departments",
                        value: "view_departments",
                    },
                    {
                        name: "View All Roles",
                        value: "view_roles",
                    },
                    {
                        name: "View All Employees",
                        value: "view_employees",
                    },
                    {
                        name: "Add a Department",
                        value: "add_department",
                    },
                    {
                        name: "Add a Role",
                        value: "add_role",
                    },
                    {
                        name: "Add an Employee",
                        value: "add_employee",
                    },
                    {
                        name: "Update an Employee Role",
                        value: "update_role",
                    },
                    {
                        name: "Quit",
                        value: "quit",
                    },
                ],
            },
        ])
        .then((response) => {
            switch (response.mainPrompt) {
                case "view_departments":
                    viewDepartments();
                    break;
                case "view_roles":
                    viewRoles();
                    break;
                case "view_employees":
                    viewEmployees();
                    break;
                case "add_department":
                    addDepartment();
                    break;
                case "add_role":
                    addRole();
                    break;
                case "add_employee":
                    addEmployee();
                    break;
                case "update_role":
                    updateRole();
                    break;
                default:
                    quit();
            }
        });
}

function viewDepartments() {
    db.findDepartments()
        .then(([data]) => {
            console.table(data);
        })
        .then(() => {
            mainMenu();
        });
}

function viewRoles() {
    db.findRoles()
        .then(([data]) => {
            console.table(data);
        })
        .then(() => {
            mainMenu();
        });
}

function viewEmployees() {
    db.findEmployees()
        .then(([data]) => {
            console.table(data);
        })
        .then(() => {
            mainMenu();
        });
}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "newName",
                message:
                    "What is the name of the department you would like to add?",
            },
        ])
        .then((data) => {
            var newDeptName = data.newName;
            db.newDepartment(newDeptName)
                .then(() => {
                    console.log("New department added");
                })
                .then(() => {
                    mainMenu();
                });
        });
}

function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "newRole",
                message: "What is the name of the role you would like to add?",
            },
            {
                type: "input",
                name: "newRoleSalary",
                message: "What is the salary for this role?",
            },
            {
                type: "list",
                name: newRoleDept,
                message: "what department does this role belong to?",
                choices: []
            }
        ])
        .then((data) => {
            var newRoleName = data.newRole;
            db.newRole(newRoleName)
                .then(() => {
                    console.log("New roll added");
                })
                .then(() => {
                    mainMenu();
                });
        });
}

function addEmployee() {}

function quit() {
    console.log("Exiting the Employee Tracker");
    process.exit();
}
mainMenu();
