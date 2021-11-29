import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.service';

@Component({
  selector: 'ns-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, DoCheck {
  public users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  ngDoCheck(): void {
    this.users = this.userService.getUsers();
  }
}
