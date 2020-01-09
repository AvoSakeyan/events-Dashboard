import { Component, OnInit } from '@angular/core';
import {GetdataService} from '../../../Service/getdata.service';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit {
  events: any;
  createModal = false;
  eventsType: any;

  constructor(private eventService: GetdataService) { }

  ngOnInit() {
    this.getEventsData();
    this.getEventsTypes();
  }

  getEventsData() {
    this.eventService.getEvents().subscribe(res => {
      this.events = res;
    });
  }

  getEventsTypes() {
    this.eventService.getEventType().subscribe(res => {
      this.eventsType = res;
    });
  }

  deleteEvent(id) {
    this.eventService.deleteEvent(id).subscribe(() => {
      console.log('Event deleted');
    });
    this.getEventsData();
  }
}
