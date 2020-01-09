import { Component, OnInit } from '@angular/core';
import {AuthoService} from '../../../Service/autho.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName = localStorage.getItem('username');

  constructor(private authoService: AuthoService) {
  }

  ngOnInit() {
    // this.logout();
  }

  logout() {
    this.authoService.logout();
  }

}
