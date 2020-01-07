import {NgModule} from '@angular/core';
import { EventsGridComponent } from './Components/events-grid/events-grid.component';
import { ClientdashboardComponent } from './Components/clientdashboard/clientdashboard.component';
import {SharedModule} from '../Shared/shared.module';


@NgModule({
  declarations: [
    EventsGridComponent,
    ClientdashboardComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
  ]
})

export class ClientModule {

}
