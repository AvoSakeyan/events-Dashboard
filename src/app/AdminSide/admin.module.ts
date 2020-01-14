import {NgModule} from '@angular/core';
import { EventsTableComponent } from './Components/events-table/events-table.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {SharedModule} from '../Shared/shared.module';
import {CommonModule} from '@angular/common';
import { CreateComponent } from './Components/create/create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClientModule} from '../ClientSide/client.module';
import { EditComponent } from './Components/edit/edit.component';
// import {AppModule} from '../app.module';
import {SearchPipe} from '../pipes/search.pipe';


@NgModule({
  declarations: [
    EventsTableComponent,
    DashboardComponent,
    CreateComponent,
    EditComponent,
    SearchPipe
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    ClientModule,
    FormsModule,
  ],
  exports: [
  ]
})

export class AdminModule {}
