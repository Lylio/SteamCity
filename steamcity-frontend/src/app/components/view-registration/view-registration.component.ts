import { Component, OnInit } from '@angular/core';
import { AttendeeService } from '../../services/attendee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public attendeeReg;

  constructor(private attendeeService: AttendeeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAttendeeReg(this.route.snapshot.params.id);
  }

  getAttendeeReg(id: number) {
    this.attendeeService.getAttendee(id).subscribe(
      data => {
        this.attendeeReg = data;
      },
      err => console.error(err),
      () => console.log('attendees loaded')
    );
  }

}
