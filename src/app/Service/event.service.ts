import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class EventService {
  private baseUrl = environment.baseURL;
  createdDataUpdate = new Subject();

    constructor(private http: HttpClient) {}
getToken = {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }

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

  updateAnEvent(id, event) {
    return this.http.put<void>(`${environment.baseURL}/events/${id}`, event, {
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
