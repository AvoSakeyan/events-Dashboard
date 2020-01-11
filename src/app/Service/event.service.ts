import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class EventService {
  private baseUrl = environment.baseURL;
  getToken = {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get(`${this.baseUrl}/events`, {
      headers: this.getToken
    });
  }

  createAnEvent(event) {
    return this.http.post(`${this.baseUrl}/events`, event, {
      headers: this.getToken
    });
  }

  getEventType() {
    return this.http.get(`${this.baseUrl}/eventTypes`, {
      headers: this.getToken
    });
  }

  deleteEvent(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/events/${id}`, {
      headers: this.getToken
    });
  }
}
