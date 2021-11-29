import { Component, Input } from '@angular/core';
import { User } from '../shared/user.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'ns-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private userService: UserService) {}

  @Input()
  id: number = 0;

  @Input()
  user: User = { name: '', age: 0, email: '', createdAt: new Date() };

  onDeleteUser(id: number) {
    this.userService.deleteUser(id);
  }
}
