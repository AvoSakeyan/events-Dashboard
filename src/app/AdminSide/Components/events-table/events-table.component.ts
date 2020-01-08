import { Component, OnInit } from '@angular/core';
import {GetdataService} from '../../../Service/getdata.service';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit {
  private events;
  createModal = false;

  constructor(private getService: GetdataService) { }

  ngOnInit() {
    this.getEventsData();
  }

  getEventsData() {
    this.getService.getEvents().subscribe(res => {
        this.events = res;
        console.log(this.events);;
    });
  }
  deleteEvent(id) {
    this.getService.deleteEvent(id).subscribe(() => {
      console.log('Event deleted');
    });
  }

}
