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
  switchDashboardToggle = false;
  switchDashboardToggle1 = true;
  tableEvent;
  tableEventType;
  errMessage: any;


  constructor(private eventService: EventService, private router: Router) {
  }

  ngOnInit() {
    this.getEvents();
    this.getEventTypes();
    this.eventService.dataUpdate.subscribe(res => {
      this.events.push(res);
    });
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

  deleteEvent(id, i) {
    if (this.events.length === 1) {
      this.errMessage = 'Can\'t delete the row when there is only one row';
      return false;
    }
    this.events.splice(i, 1);
    this.eventService.deleteEvent(id).subscribe(() => {
      console.log('Event deleted');
    });
  }

  switchComponents() {
    this.switchDashboardToggle = !this.switchDashboardToggle;
    this.switchDashboardToggle1 = !this.switchDashboardToggle1;
  }
}


