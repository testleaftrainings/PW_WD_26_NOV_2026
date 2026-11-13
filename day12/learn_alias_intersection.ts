// Define a type that contains personal information.
type personalDetails = {
    name: string;
    age: number;
};

// Define a type that contains employee information.
type empDetails = {
    empID: number;
    empSalary: number;
};

// Combine both types using the intersection operator.
// The details type must contain properties from personalDetails AND empDetails.
type details = personalDetails & empDetails;

// Create an employee object using the combined details type.
let employees1: details = {
    name: "Bharath",
    age: 30,
    empID: 123,
    empSalary: 90000
};