import {NgModule} from '@angular/core';
import { EventsTableComponent } from './Components/events-table/events-table.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {SharedModule} from '../Shared/shared.module';


@NgModule({
  declarations: [
    EventsTableComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    DashboardComponent
  ]
})

export class AdminModule {}
