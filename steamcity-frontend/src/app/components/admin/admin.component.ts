import { Component, OnInit } from '@angular/core';
import { AttendeeService } from '../../services/attendee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public attendees;

  constructor(private attendeeService: AttendeeService) { }

  ngOnInit() {
    this.getAttendees();
  }

  getAttendees() {
    this.attendeeService.getAttendees().subscribe(
      data => {this.attendees = data},
      err => console.error(err),
      () => console.log('attendees loaded')
    );
  }
}
