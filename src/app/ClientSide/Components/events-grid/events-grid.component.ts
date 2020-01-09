import { Component, OnInit } from '@angular/core';
import {GetdataService} from '../../../Service/getdata.service';

@Component({
  selector: 'app-events-grid',
  templateUrl: './events-grid.component.html',
  styleUrls: ['./events-grid.component.scss']
})
export class EventsGridComponent implements OnInit {
  events: any;

  constructor(private getEventsService: GetdataService) {
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.getEventsService.getEvents().subscribe(res => this.events = res);
  }
}
