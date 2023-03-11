const user = {
  id: 1,
  name: 'Bryan',
  surname: 'Escobar'
}

const {name, surname} = user;

console.log(user);

console.log(name + ' '+ surname);

const user2 = {...user};

user2.name = 'Bryan 2'

console.table(user);
console.table(user2);