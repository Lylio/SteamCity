import { Component, OnInit } from '@angular/core';
import { AttendeeService } from '../../services/attendee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public attendees;

  constructor(private bikeService: AttendeeService) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes() {
    this.bikeService.getAttendees().subscribe(
      data => {this.attendees = data},
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }
}
