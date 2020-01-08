import { Component, OnInit } from '@angular/core';
import {AuthoService} from '../../../Service/autho.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: AuthoService) { }

  ngOnInit() {
  }

}
