import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from 'src/types';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  searchValue: string = '';
  isSorted: boolean = false;

  constructor(public usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers();
  }


  // searchUserByLocation(searchLocation: string) {
  //   return this.searchResult = this.users.filter((user) =>
  //     user.locations.some((location) =>
  //       location.title.toLowerCase().includes(searchLocation.toLowerCase())
  //     )
  //   );
  // }

  onInput(event: any) {
    this.searchValue = event.target.value;
    this.usersService.searchUsers(this.searchValue, ["name", "email", "phone"]);
  }

  AZsortClick() {
    this.isSorted = true;
    this.usersService.AZsortUsers();
  }

  ZAsortClick() {
    this.isSorted = true;
    this.usersService.ZAsortUsers();
  }

  cancelSort() {
    this.isSorted = false;
  }
}


