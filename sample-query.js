const User = require("./models").user;

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allUsers = await User.findAll({ raw: true });
    return allUsers;
  } catch (e) {
    console.log(e);
  }
}

async function findSpecificUser() {
  try {
    const specificUser = await User.findOne({ where: { name: "Bibi Krom" } });
    return allUsers;
  } catch (e) {
    console.log(e);
  }
}

// getAllUsers().then((users) => console.log(users));
// findSpecificUser();

// CHECK THIS CODE WITH TEACHER!!!
