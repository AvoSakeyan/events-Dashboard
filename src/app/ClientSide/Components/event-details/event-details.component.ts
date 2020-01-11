import {Component, Input, OnInit} from '@angular/core';
import {EventService} from '../../../Service/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
    @Input() singleEvent: any;
    @Input() singleEventType: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }



}
