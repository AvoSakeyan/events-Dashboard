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
  editEvent = false;
  eventsType: any;
  createModal = false;
  eventGrid: boolean;
  errMessage: any;
  tableEvent;
  tableEventType;

  constructor(
    private eventService: EventService,
    private router: Router
  ) {
  }

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


