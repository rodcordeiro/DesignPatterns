import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabase = MyDatabaseClassic.getInstance();

myDatabase.add({
  name: 'zezin',
  age: 13,
});
myDatabase.add({
  name: 'Mariah',
  age: 12,
});
myDatabase.add({
  name: 'John',
  age: 19,
});
