import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _eventUrl = 'http://ec2-3-19-222-30.us-east-2.compute.amazonaws.com:3000/api/getEvents';
  private _createEventUrl = 'http://ec2-3-19-222-30.us-east-2.compute.amazonaws.com:3000/api/createEvents';
  private _userEventUrl = 'http://ec2-3-19-222-30.us-east-2.compute.amazonaws.com:3000/api/getUserEvents';
  private _deleteEventUrl = 'http://ec2-3-19-222-30.us-east-2.compute.amazonaws.com:3000/api/deleteUserEvents';
  constructor(private http: HttpClient) { }
 getEvents() {
    return this.http.get<any>(this._eventUrl);
   }
   getUserEvents(user) {
    return this.http.post<any>(this._userEventUrl,user);
   }
   createEvent(event){
     console.log(event)
    return this.http.post<an