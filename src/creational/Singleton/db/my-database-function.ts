// This is the structure as a function, focuse on typescript and javascript.

import { User } from '../interfaces/User';

export const MyDatabaseFunction = (function () {
  const users: Array<User> = [];
  return {
    add(user: User): void {
      users.push(user);
    },
    remove(index: number): void {
      users.splice(index, 1);
    },
    show(): void {
      for (const user of users) {
        console.log(user);
      }
    },
  };
})();
