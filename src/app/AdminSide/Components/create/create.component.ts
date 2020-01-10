import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../../Service/event.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @Output() close = new EventEmitter()
  createForm: any = FormGroup;
  events: any;
  eventTypes: any

  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.createValidation();
    this.getEventData();
    this.getEventTypes();
  }

  createValidation() {
    this.createForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(12)
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100)
      ]),
      eventType: new FormControl(null, [
        Validators.required
      ]),
      date: new FormControl(null, [
        Validators.required
      ]),
    });
  }

  getEventData() {
    this.eventService.getEvents().subscribe(res => this.events = res);
  }

  getEventTypes() {
    this.eventService.getEventType().subscribe(res => this.eventTypes = res);
  }

  sendEventData() {
    if (this.createForm.invalid) {
      return;
    }
    const sendData = {...this.createForm.value};
    // console.log(sendData);

    const createdData = {
      name: sendData.name,
      description: sendData.description,
      eventType: +sendData.eventType,
      date: sendData.date,
    };
    this.close.emit();
    this.eventService.createAnEvent(createdData).subscribe(() => {
      console.log('Event Created');
    });
    this.getEventData();
  }
}
