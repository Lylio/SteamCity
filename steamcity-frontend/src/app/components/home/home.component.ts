import { Component, OnInit } from '@angular/core';
import { AttendeeService } from '../../services/attendee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  diets: string[] = [
    'No Preference',
    'Vegetarian',
    'Vegan',
    'Pescatarian',
    'Flexitarian',
    'Other (please state below)'
  ];
  attendeeform: FormGroup;
  validMessage: string;

  constructor(private attendeeService: AttendeeService) { }

  ngOnInit() {
    this.attendeeform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      preferenceDate: new FormControl('', Validators.required),
      hasPaid: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {
    if (this.attendeeform.valid) {
      this.validMessage = 'Your attendee registration has been submitted. Thank you.';
      this.attendeeService.createAttendeeRegistration(this.attendeeform.value).subscribe(
        data => {
          this.attendeeform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = 'Please fill out the form before submitting!';
    }
  }

}
