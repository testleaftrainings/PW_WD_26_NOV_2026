// Define the structure of the employee object.
let empDetails: {

    // Define empID as a required number property.
    empID: number;

    // Define empName as an optional string property.
    empName?: string;

    // Define empDepartment as a required string property.
    empDepartment: string;

} = {

    // Assign a number to the empID property.
    empID: 123,

    // empName is optional, so it is not provided.
    // empName: "Rajesh",

    // Assign a string to the empDepartment property.
    empDepartment: "QA"
};

// Retrieve the empName property using dot notation.
console.log(empDetails.empName);

// Modify the empDepartment property.
empDetails.empDepartment = "DEV";

// Print the updated empDepartment value.
console.log(empDetails.empDepartment);

// Delete the optional empName property.
delete empDetails.empName;