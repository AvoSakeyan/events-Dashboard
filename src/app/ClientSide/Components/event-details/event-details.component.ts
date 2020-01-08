import {Component, OnInit } from '@angular/core';
import {GetdataService} from '../../../Service/getdata.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  events: any;

  constructor(private eventService: GetdataService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe(res => {
      this.events = res;
    });
  }
}
