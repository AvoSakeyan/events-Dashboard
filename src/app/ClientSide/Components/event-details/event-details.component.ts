import {Component, Input, OnInit} from '@angular/core';
import {EventService} from '../../../Service/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
    @Input() singleEvent: any;
  @Input() myType: any;
    eventTypes: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    console.log(this.singleEvent);
    console.log(this.getEventType());
  }

  getEventType() {
    this.eventService.getEventType().subscribe(res => {
      console.log(res);
      this.eventTypes = res;
    });
  }

}
