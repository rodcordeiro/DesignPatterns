import { MyDatabaseFunction } from './db/my-database-function';

import './moduleA';

const myDatabase = MyDatabaseFunction;

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

myDatabase.show();
