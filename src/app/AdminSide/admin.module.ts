import {NgModule} from '@angular/core';
import { EventsTableComponent } from './Components/events-table/events-table.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {SharedModule} from '../Shared/shared.module';
import {CommonModule} from '@angular/common';
import { CreateComponent } from './Components/create/create.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    EventsTableComponent,
    DashboardComponent,
    CreateComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent
  ]
})

export class AdminModule {}
