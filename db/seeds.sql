INSERT INTO department (name)
VALUES ('Engineering'), ('Marketing'), ('Finance');

INSERT INTO role (title, salary, department_id)
VALUES 
('Software Engineer', 80000, 1),
('Marketing Manager', 60000, 2),
('Accountant', 70000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, NULL),
('Robert', 'Johnson', 3, NULL);
