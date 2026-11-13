// Define an enum to store named constant values for different login roles.
enum RolePassword {

    // Assign the numeric value 123 to the admin role.
    admin = 123,

    // Assign the numeric value 567 to the user1 role.
    user1 = 567,

    // Assign the numeric value 1234 to the user2 role.
    user2 = 1234,

    // Assign the numeric value 123 to the guest role.
    guest = 123
}

// Access the value associated with the guest member.
console.log(RolePassword.guest);