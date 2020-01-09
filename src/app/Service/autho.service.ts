import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

//To do: gettoken();
export class AuthoService {
  private baseUrl = environment.baseURL;

  constructor(private http: HttpClient, private router: Router) {
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

  logout() {
    localStorage.clear();
    this.router.navigate((['/login']));
  }


}
