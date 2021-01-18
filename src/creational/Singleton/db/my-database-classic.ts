// This is the usual Singleton structure, this could be used on other languages
import { User } from '../interfaces/User';

export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;
  private users: Array<User> = [];

  private constructor() {}

  static getInstance(): MyDatabaseClassic {
    if (this.instance === null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic.instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
