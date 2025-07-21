let users = [];

let numberOfUsers = parseInt(prompt("Enter number of users:"));

function addUsers(count) {
  for (let i = 0; i < count; i++) {
    let name = prompt(`Enter name of user ${i + 1}`);
    let id = prompt(`Enter ID of ${name}`);
    let balance = parseFloat(prompt(`Enter balance of ${name}`));

    users.push({
      name: name,
      id: id,
      balance: balance
    });
  }
}

function updateBalance(id, newBalance) {
  let found = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i].balance = newBalance;
      found = true;
      
      break;
    }
  }

  if (!found) {
    alert("User with this ID not found.");
  }
}

function deleteUserById(id) {
  let index = -1;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    let deleted = users.splice(index, 1);
    
  } else {
    alert("User with this ID not found.");
  }
}

addUsers(numberOfUsers);

let targetId = prompt("Enter ID of the user to update balance:");
let newBal = parseFloat(prompt("Enter new balance:"));
updateBalance(targetId, newBal);

let deleteId = prompt("Enter ID of the user to delete:");
deleteUserById(deleteId);

console.log("Users after update and deletion:");
console.log(users);