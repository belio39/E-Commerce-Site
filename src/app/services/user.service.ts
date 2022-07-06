import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Users } from '../interface/Users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(loginInfo: Users) {
    return this.http.post<any>('http://localhost:3000/users/login', loginInfo);
  }

  signup(userInfo: Users) {
    return this.http.post<any>('http://localhost:3000/users', userInfo);
  }

  isLoggedin() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  checkRole() {
    return localStorage.getItem('role');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  getAllUser() {
    return this.http.get<Users[]>('http://localhost:3000/users');
  }
}
