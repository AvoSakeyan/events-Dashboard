import {NgModule} from '@angular/core';
import { EventsGridComponent } from './Components/events-grid/events-grid.component';
import { ClientdashboardComponent } from './Components/clientdashboard/clientdashboard.component';
import {SharedModule} from '../Shared/shared.module';
import {EventDetailsComponent} from './Components/event-details/event-details.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    EventsGridComponent,
    ClientdashboardComponent,
    EventDetailsComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    EventsGridComponent
  ]
})

export class ClientModule {

}
