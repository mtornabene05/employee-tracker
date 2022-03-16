USE employees_db;

INSERT INTO department(name) VALUES
    ("ENGINEERING"),
    ("PROPERTY"),
    ("DESIGN"),
    ("MANUFACTURING");

INSERT INTO role(title, salary, department_id) VALUES
    ("PROP_MANAGER", 70000.00, 2),
    ("INVENTORY CLERK", 40000.00, 2),
    ("DESIGN_MANAGER", 70000.00, 3),
    ("DESIGNER", 50000.00, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES
    ("DANIEL", "ACUNA", 1, NULL),
    ("MARIA", "TORNABENE", 2, 1),
    ("JIM", "BRUEWER", 3, NULL),
    ("KEVIN", "BURNS", 4, 3);
