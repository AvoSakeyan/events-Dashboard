import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../Service/event.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

}
