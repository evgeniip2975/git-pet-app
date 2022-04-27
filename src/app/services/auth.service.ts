import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  isLoginIn() {
    return this.getToken() !== null;
  }
  login(tokenInfo: {
    email: string;
    password: string;
  }): Observable<string | boolean> {
    if (
      tokenInfo.email === 'admin@gmail' &&
      tokenInfo.password === 'admin123'
    ) {
      this.setToken('asdasfadsgfafasdasdasfaafasfa');
      return of(true);
    }
    return throwError(() => new Error('Failed login'));
  }
  logout() {
    this.router.navigate(['login'])
  }
}
