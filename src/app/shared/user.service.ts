import { Injectable } from '@angular/core';

export interface User {
  name: string;
  age: number | null;
  email: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: User[] = [];

  getUsers() {
    const localStorageUsers = localStorage.getItem('users');

    if (localStorageUsers) {
      this.users = JSON.parse(localStorageUsers) as User[];
    }
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  deleteUser(id: number) {
    const newUsers = [...this.users.slice(0, id), ...this.users.slice(id + 1)];
    this.users = newUsers;
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
