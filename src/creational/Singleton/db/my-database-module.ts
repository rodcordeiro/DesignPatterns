// This is the structure as module, focuse on typescript and javascript.

import { User } from '../interfaces/User';

const users: Array<User> = [];

export const MyDatabaseModule = {
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
  }

}