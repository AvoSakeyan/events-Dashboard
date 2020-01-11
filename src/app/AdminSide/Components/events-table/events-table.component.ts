import {Component, Input, OnInit, Output} from '@angular/core';
import {EventService} from '../../../Service/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit {
  events: any;
  eventsType: any;
  editEvent = false;
  createModal = false;
  tableEvent;
  tableEventType;
  errMessage: any;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.getEvents();
    this.getEventTypes();
  }

  getEvents() {
    this.eventService.getEvents().subscribe(res => {
      this.events = res;
    });
  }

  getEventTypes() {
    this.eventService.getEventType().subscribe(res => {
      this.eventsType = res;
    });
  }


  editAnEvent(event, eventsType) {
      this.editEvent = true;
      this.tableEvent = event;
      this.tableEventType = eventsType;
  }


  deleteEvent(id) {
    if (this.events.length === 1) {
      this.errMessage = 'Can\'t delete the row when there is only one row';
      return false;
    }
    this.eventService.deleteEvent(id).subscribe(() => {
      console.log('Event deleted');
    });
  }
}


