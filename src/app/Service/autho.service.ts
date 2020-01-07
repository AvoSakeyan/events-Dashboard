import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {
  private baseUrl = environment.baseURL;

  constructor(private http: HttpClient) {
  }

  login(data) {
   return  this.http.post(`${this.baseUrl}/login`, {email: data.email, password: data.password});
  }

  isAdminUser() {
    return !!localStorage.getItem('isAdmin');
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  // logout() {
  //   localStorage.clear();
  // }
}
