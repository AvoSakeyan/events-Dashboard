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
  editmodal = false;
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
    this.updateEventsDinamically();
  }

  // ========== Get Events, Update Dinamically and Event Types =============
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

  updateEventsDinamically() {
    this.eventService.createdDataUpdate.subscribe(res => {
      this.events.push(res);
    });
  }

// =========== Open Edit Modal, and sending data =======
  editAnEvent(event, eventsType) {
      this.editmodal = true;
      this.tableEvent = event;
      this.tableEventType = eventsType;
  }

  // ============== Delete event dinamically=========
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

  // ========= Switch Button ========
  switchComponents() {
    this.switchDashboardToggle = !this.switchDashboardToggle;
    this.switchDashboardToggle1 = !this.switchDashboardToggle1;
  }
}


