// how to reset mysql password

// 1) sudo systemctl stop mysql

// 2) sudo service mysql stop

// 3) sudo mkdir -p /var/run/mysqld
// 4) sudo chown mysql:mysql /var/run/mysqld
// 5) sudo chmod 755 /var/run/mysqld
// 6) sudo mysqld_safe --skip-grant-tables --socket=/var/run/mysqld/mysqld.sock &

// 7) UPDATE mysql.user SET authentication_string='*YOURNEWPASSWORDHASH' WHERE User='root';

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// add new user in mysql
// mysql -u root -p -e "CREATE USER 'sh'@'localhost' IDENTIFIED BY 'shoaib123';"

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// mysql 
// user => root
// password =>  no password

// user 2
// user => sh
// password => shoaib123 

// ALTER USER 'root'@'host' IDENTIFIED BY 'root';


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// start command
// sudo  mysql -u root -p

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// create database

// 1) create database nameOfDatabase;

// list of data base;
// 2) show databases;

// create table
// CREATE TABLE Employees ( id INT PRIMARY KEY AUTO_INCREMENT, salary DECIMAL(10, 2), name VARCHAR(100), email VARCHAR(100) UNIQUE, mobileno VARCHAR(15));

// insert info

// INSERT INTO Employees (salary, name, email, mobileno)
// VALUES 
//     (45000.00, 'John Doe', 'john.doe@example.com', '123-456-7890'),
//     (55000.00, 'Jane Smith', 'jane.smith@example.com', '234-567-8901'),
//     (60000.00, 'Jim Brown', 'jim.brown@example.com', '345-678-9012'),
//     (47000.00, 'Emily Johnson', 'emily.johnson@example.com', '456-789-0123'),
//     (52000.00, 'Michael Davis', 'michael.davis@example.com', '567-890-1234'),
//     (58000.00, 'Sarah Wilson', 'sarah.wilson@example.com', '678-901-2345'),
//     (53000.00, 'Chris Taylor', 'chris.taylor@example.com', '789-012-3456'),
//     (61000.00, 'Jessica Martinez', 'jessica.martinez@example.com', '890-123-4567'),
//     (49000.00, 'Daniel Garcia', 'daniel.garcia@example.com', '901-234-5678'),
//     (56000.00, 'Laura Rodriguez', 'laura.rodriguez@example.com', '012-345-6789');

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// CREATE TABLE Tasks (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     employee_id INT,
//     task_description VARCHAR(255),
//     due_date DATE,
//     status ENUM('Pending', 'In Progress', 'Completed') DEFAULT 'Pending',
//     FOREIGN KEY (employee_id) REFERENCES Employees(id)
// );


// INSERT INTO Tasks (employee_id, task_description, due_date, status)
// VALUES 
//     (1, 'Complete project report', '2024-08-15', 'In Progress'),
//     (2, 'Prepare presentation slides', '2024-08-20', 'Pending'),
//     (3, 'Update software documentation', '2024-08-25', 'Completed'),
//     (4, 'Conduct team meeting', '2024-08-18', 'Pending'),
//     (5, 'Review code changes', '2024-08-22', 'In Progress');


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Update query

// UPDATE Employees SET JoinDate='2024-02-01' where id =7;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// CREATE TABLE Roles (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     role_name VARCHAR(50) NOT NULL UNIQUE,
//     description TEXT
// );


// -- Insert roles into the Roles table

// INSERT INTO Roles (role_name, description) VALUES
// ('Administrator', 'Has full access to all system features and settings.'),
// ('Manager', 'Oversees teams and projects, and manages performance.'),
// ('Developer', 'Responsible for writing and maintaining code.'),
// ('Tester', 'Tests software for bugs and ensures quality.'),
// ('HR Specialist', 'Handles human resources functions such as recruitment and employee relations.'),
// ('Support', 'Provides customer and technical support to users.'),
// ('Analyst', 'Analyzes data and provides insights for decision-making.'),
// ('Designer', 'Creates design elements for products and user interfaces.'),
// ('Consultant', 'Provides expert advice in specific areas to improve business operations.'),
// ('Intern', 'Temporary role for learning and assisting in various tasks.');



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ALTER TABLE Employees
// ADD CONSTRAINT fk_role
// FOREIGN KEY (role_id) REFERENCES Roles(id);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// normal select query
// SELECT * FROM Employees;
// SELECT * FROM Tasks;

// select name, id, salary from Employees;


// filter with id
// select salary,name,id from Employees where id=1;

// with sorting order by
// select salary,name,id from Employees order by salary desc;

// with limit
// select salary,name,id from Employees order by salary desc limit 2;


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// select highest
// select salary,name,id from Employees order by salary desc limit 1;

// second highest salary
// select salary,name,id from Employees order by salary desc limit 1 offset 1;

// third highest salary
// select salary,name,id from Employees order by salary desc limit 1 offset 2;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// select query where name stat from a

// select * from Employees where name like 'j%';

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// change coloum name change

// select salary as second_hihiest from Employees order by salary desc limit 1 offset 1;
// select salary as third_highest from Employees order by salary desc limit 1 offset 2;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// select sum(salary) as total_salary from Employees;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// select concat(name, ' ', email) as user_info from Employees;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// select Employees.id,name,salary,role_id,role_name,manager_id from Employees inner join Roles on Employees.role_id=Roles.id;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// find developer has salary > manager salary

// SELECT e.id, e.name AS Emp_name,  e2.name AS Manager_name, e2.salary AS manager_salary
// FROM Employees e
// INNER JOIN Employees e2 on e.manager_id = e2.id
// WHERE e.salary > e2.salary;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// How do I find the average salary of all employees?

// SELECT AVG(salary) AS average_salary
// FROM Employees;


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 1) Calculate the average salary of employees in each department.
// SELECT role_id, AVG(salary) AS average_salary
// FROM Employees
// GROUP BY role_id;

// 2) Calculate the total salary of employees in each department.

// SELECT role_id, SUM(salary) AS total_salary
// FROM Employees
// GROUP BY role_id;


// 3) Calculate the max salary of employees in each department.

// SELECT role_id, MAX(salary) AS max_salary
// FROM Employees
// GROUP BY role_id;

// 4) Calculate the max salary of employees in each department.

// SELECT role_id, MIN(salary) AS max_salary
// FROM Employees
// GROUP BY role_id;


// 5) Calculate the total count of employees in each department.

// SELECT role_id, COUNT(salary) AS EMP_COUNT
// FROM Employees
// GROUP BY role_id;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// How do I get the total salary for each department?

    // SELECT role_id, SUM(salary) as total_salary
    // FROM Employees
    // GROUP BY role_id;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// fillt with date
// select * FROM Employees where JoinDate <= '2024-08-01';

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// fillt with date
// select * FROM Employees where JoinDate <= '2024-08-01';

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// filter with CURDATE

// select * FROM Employees where JoinDate >= CURDATE();

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// update login date

// UPDATE users
// SET last_login = CURDATE()
// WHERE id = 1;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// group by

// select e.role_id from Employees e GROUP BY e.role_id;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




