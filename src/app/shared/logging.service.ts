import { Injectable } from '@angular/core';
import { User } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  logUser(user: User) {
    console.log('Saved new user:');
    console.table(user);
  }
}
