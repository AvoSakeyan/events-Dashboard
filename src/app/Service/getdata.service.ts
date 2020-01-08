import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private baseUrl = environment.baseURL;

  constructor(private http: HttpClient) {
  }

  getEvents() {
    return this.http.get(`${this.baseUrl}/events`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  createAnEvent(event) {
    return this.http.post(`${this.baseUrl}/events`, event, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  deleteEvent(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/events/:${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
}
