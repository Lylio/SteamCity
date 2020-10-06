import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AttendeeService {

  constructor(private http: HttpClient) { }

  getAttendees() {
    return this.http.get('/server/api/v1/attendees');
  }

  getAttendee(id: number) {
    return this.http.get('/server/api/v1/attendees/' + id);
  }

  createAttendeeRegistration(attendee) {
    let body = JSON.stringify(attendee);
    return this.http.post('/server/api/v1/attendees', body, httpOptions);
  }
}
