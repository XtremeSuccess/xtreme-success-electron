import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { url } from 'src/server-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(
    private readonly http: HttpClient,
  ) { }

  login(email: string, password: string) {
    return this.http.post(`${url}/auth/local`, {
      identifier: email,
      password: password
    });
  }

  register(username: string, email: string, password: string) {
    return this.http.post(`${url}/auth/local/register`, {
      username: username,
      email: email,
      password: password
    });
  }

  isAuthenticated() {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
}
