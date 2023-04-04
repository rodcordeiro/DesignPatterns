import { MyDatabaseClassic } from './db/my-database-classic';

import './moduleA';

const myDatabase = MyDatabaseClassic.getInstance();

myDatabase.add({
  name: 'Rod',
  age: 21,
});
myDatabase.add({
  name: 'digo',
  age: 22,
});
myDatabase.add({
  name: 'yah',
  age: 23,
});

myDatabase.remove('John');
myDatabase.show();
