import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private loggingService: LoggingService
  ) {}

  userForm = this.fb.group({
    name: ['', Validators.required],
    age: [''],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,12}$'
        ),
      ],
    ],
  });

  onFormSubmit(event: Event) {
    event.preventDefault();
    const newUser = {
      name: this.userForm.get('name')?.value,
      age: this.userForm.get('age')?.value,
      email: this.userForm.get('email')?.value,
      createdAt: new Date(),
    };
    this.userService.addUser(newUser);
    this.loggingService.logUser(newUser);
    this.userForm.reset();
  }
}
