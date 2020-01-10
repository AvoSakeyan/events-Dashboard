import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../../Service/event.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Input() indEvent;
  @Input() indEventType;
  events: any;
  eventTypes: any
  private createForm: FormGroup;

  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.getEvent();
    this.getEventTypes();
    this.createValidation();
  }

  createValidation() {
    this.createForm = new FormGroup({
      name: new FormControl({disabled: true}, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(12)
      ]),
      description: new FormControl({disabled: true}, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100)
      ]),
      eventType: new FormControl({disabled: true}, [
        Validators.required
      ]),
      date: new FormControl({disabled: true}, [
        Validators.required
      ]),
    });
  }

  getEvent() {
    this.eventService.getEvents().subscribe(res => {
    this.events = res;
    });
}

  getEventTypes() {
    this.eventService.getEventType().subscribe(res => this.eventTypes = res);
  }

}
