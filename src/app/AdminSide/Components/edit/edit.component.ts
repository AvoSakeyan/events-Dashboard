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
  today = Date.now();
  createForm: FormGroup;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.createValidation();
  }

// ==========  Validation for Create inputs==========
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

// ========== Update Button  ==========
  saveChangedEvent(id) {
      const changedEvent = {...this.createForm.value};
      const newChngEvent = {
        name: this.indEvent.name,
        description: changedEvent.description,
        eventType: +this.indEvent.eventType,
        date: changedEvent.date
      };
      this.eventService.updateAnEvent(id, newChngEvent ).subscribe(res => {
         this.eventService.updateDataDynamically.next(res);
        });
      this.close.emit();
    }
}
