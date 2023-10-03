import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  searchValue: string = '';
  searchResult: UserInterface[] = [];
  users: UserInterface[] = [];

  async ngOnInit() {
    const response: Response = await fetch ("https://jsonplaceholder.typicode.com/users");
    const data: UserInterface[] = await response.json();
    this.users = data;
    console.log(this.users);
  }

  // searchUserByName(searchName: string) {
  //   return this.searchResult = this.users.filter((user) =>
  //     user.name.toLowerCase().includes(searchName.toLowerCase())
  //   );
  // }

  // searchUserByLocation(searchLocation: string) {
  //   return this.searchResult = this.users.filter((user) =>
  //     user.locations.some((location) =>
  //       location.title.toLowerCase().includes(searchLocation.toLowerCase())
  //     )
  //   );
  // }

  onInput(event: any) {
    // this.searchValue = event.target.value;
    // this.searchUserByName(event.target.value); 
    // if (this.searchResult.length === 0) this.searchUserByLocation(event.target.value);
  }
}


