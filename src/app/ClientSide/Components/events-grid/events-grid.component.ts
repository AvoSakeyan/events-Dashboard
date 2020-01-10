import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../Service/event.service';

@Component({
  selector: 'app-events-grid',
  templateUrl: './events-grid.component.html',
  styleUrls: ['./events-grid.component.scss']
})
export class EventsGridComponent implements OnInit {
  events: any;

  constructor(private getEventsService: EventService) {
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.getEventsService.getEvents().subscribe(res => this.events = res);
  }
}
