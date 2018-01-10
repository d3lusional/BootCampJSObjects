let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
  };
  function printUser(user, idx, arr) {
    console.log(arr);
    let name = user.last_name.toUpperCase() + ", " + user.first_name.toUpperCase();
    let length = user.last_name.length + user.first_name.length;
    console.log(idx+1 + " - " + name + " - " + length);
  }
  
  // Method 1:
  console.log('EMPLOYEES');
  for(let i = 0; i < users.employees.length; i++) {
    printUser(users.employees[i], i);
  }
  console.log('MANAGERS');
  
  for(let i =0; i < users.managers.length; i++) {
    printUser(users.managers[i], i);
  }
