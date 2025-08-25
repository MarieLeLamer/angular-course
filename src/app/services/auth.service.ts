import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = 'MyFakeToken';

  getToken() {
    return this.token;
  }
}
