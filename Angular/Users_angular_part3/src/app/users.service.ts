import { Injectable } from '@angular/core';
import { UserInterface } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: UserInterface[] = [];
  searchResult: UserInterface[] = [];
  sortedUsers: UserInterface[] = [];
  constructor() { }

  async getUsers() {
    const response: Response = await fetch ("https://jsonplaceholder.typicode.com/users");
    const data: UserInterface[] = await response.json();
    this.users = data;
    console.log(this.users);
  }

  searchUsers(searchValue: string, searchCriterias:Array<keyof Omit<UserInterface, "addres"| "geo"| "company">>) {
    return this.searchResult = this.users.filter((user) =>{
      return searchCriterias.some((key) => user[key].toString().toLowerCase().includes(searchValue.toLowerCase()));
    }
  )}

  AZsortUsers() {
    this.sortedUsers = [...this.users].sort((user1, user2) => user1.name.localeCompare(user2.name))
     return this.sortedUsers
  }

  ZAsortUsers() {
    this.sortedUsers = [...this.users].sort((user1, user2) => user2.name.localeCompare(user1.name))
     return this.sortedUsers
  }
}
