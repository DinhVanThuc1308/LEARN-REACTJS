// function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     for (let i = 0; i < submittedUsers.length; i++) {
//       let found = false;
//       for (let j = 0; j < goodUsers.length; j++) {
//         if (submittedUsers[i].id === goodUsers[j].id) {
//           found = true;
//           break;
//         }
//       }
//       if (!found) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    for (let i = 0; i < submittedUsers.length; i++) {
      // var check = goodUsers.find((u) => u.id === submittedUsers[i].id);
      let check = goodUsers.find(function(u){
        return u.id === submittedUsers[i].id
      })
      if (!check) {
        return false;
      }
    }
    return true;
  };
}

var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

var testAllValid = checkUsersValid(goodUsers);

var a = testAllValid([{ id: 2 }, { id: 1 }]);
// => true

var b = testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]);
// => false

console.log(a);
console.log(b);
