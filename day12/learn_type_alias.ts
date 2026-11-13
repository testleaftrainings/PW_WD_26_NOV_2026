// Define a union type that allows either a string or a number.
let res: string | number = 200;

// Assign a string value because string is allowed by the union type.
res = "Created";

// Create a type alias for the string type.
type responseType = string;

// Create a variable using the responseType alias.
let res1: responseType = "Created";

// Create another variable using the same responseType alias.
let res2: responseType = "Ok";

// Create a type alias that defines the structure of an employee object.
type employeeDetails = {

    // Define empID as a required number property.
    empID: number;

    // Define empName as a required string property.
    empName: string;

    // Define empDept as a required string property.
    empDept: string;
};

// Create the first employee object using the employeeDetails type.
let employee1: employeeDetails = {

    // Assign the employee ID.
    empID: 12345,

    // Assign the employee name.
    empName: "Karthik",

    // Assign the employee department.
    empDept: "Finance"
};

// Create the second employee object using the same employeeDetails type.
let employee2: employeeDetails = {

    // Assign the employee ID.
    empID: 9876,

    // Assign the employee name.
    empName: "Kumar",

    // Assign the employee department.
    empDept: "HR"
};
