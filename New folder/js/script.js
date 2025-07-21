var users = [];

function AddUser(Uname, Uid, Ubalance) {
  users.push({
    name: Uname,
    id: Uid,
    balance: Ubalance
  });
  console.table(users);
}

function EditBlanceById(id, newBalance) {
  var Ufid = users.findIndex(item => item.id == id);
  if (Ufid !== -1) {
    users[Ufid].balance = newBalance;
    console.table(users);
  } else {
    alert("User not found!");
  }
}

function deleteUsersById(id) {
  var delId = users.findIndex(item => item.id == id);
  if (delId !== -1) {
    users.splice(delId, 1);
    console.table(users);
  } else {
    alert("User not found!");
  }
}

var numOfUsers = prompt("How many users will you add?");
var Uname, Uid, Ubalance;

for (var i = 0; i < numOfUsers; i++) {
  Uname = prompt("Enter the name:");
  Uid = Number(prompt("Enter the ID:"));
  Ubalance = Number(prompt("Enter the balance:"));
  AddUser(Uname, Uid, Ubalance);
}

for (var i = 0; i < numOfUsers; i++) {
  var child = Number(prompt("Enter the ID of the user to update balance:"));
  var newBalance = Number(prompt("Enter the new balance:"));
  EditBlanceById(child, newBalance);
}

var del = Number(prompt("Enter the ID of the user to delete:"));
deleteUsersById(del);
console.table(users);