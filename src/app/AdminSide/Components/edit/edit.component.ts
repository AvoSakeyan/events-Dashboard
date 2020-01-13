import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../../Service/event.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{
  @Output() close = new EventEmitter();
  @Input() indEvent;
  @Input() indEventType;
  today = Date.now();
  events;
  eventTypes;
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
      name: new FormControl({value: this.indEvent.name, disabled: true}, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(12)
      ]),
      description: new FormControl({value: this.indEvent.description, disabled: false}, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100)
      ]),
      date: new FormControl({value: this.indEvent.date, disabled: false}, [
        Validators.required
      ]),
      eventType: new FormControl({value: this.indEvent.eventType, disabled: true}, [
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

  saveChangedEvent(id) {
      const changedEvent = {...this.createForm.value};
      const newChngEvent = {
        name: this.indEvent.name,
        description: changedEvent.description,
        eventType: +this.indEvent.eventType,
        date: changedEvent.date
      };
      console.log(newChngEvent);

      this.close.emit();
      this.eventService.updateAnEvent(id, newChngEvent ).subscribe(() => {
        console.log('Event Updated');
      });
    }

}
