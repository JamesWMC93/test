import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
  
})

export class StudentService {

  
  constructor(private http:HttpClient) {}
  msgContent = new Subject<string>();


  setMessage(value: any) {
    this.msgContent.next(value);
  }


  getMessage() {
    return this.msgContent.asObservable();
  }

  onMeetingRoom(formData: FormData): Observable<any> {
    return this.http.post<any>('http://192.168.191.226/face/roll-call/db_read_place.php', formData)
  }

  onLogin(formData: FormData): Observable<any> {
    return this.http.post<any>('http://192.168.191.226/face/roll-call/db_login.php', formData)
  }

  onReadrecord(formData: FormData): Observable<any> {
    return this.http.post<any>('http://192.168.191.226/face/roll-call/db_read_record.php', formData)
  }


  onCheckEvent(formData: FormData): Observable<any> {
    return this.http.post<any>('http://192.168.191.226/face/roll-call/db_read_event.php', formData)
  }

  onCheckEvent2(formData: FormData): Observable<any> {
    return this.http.post<any>('http://192.168.191.226/face/roll-call/db_read_event2.php', formData)
  }

  onRegisterEvent(formData: FormData): Observable<any> {
    return this.http.post<any>('http://192.168.191.226/face/roll-call/db_event.php', formData)
  }
  
  onSendService(formData:FormData):Observable<any>{
    return this.http.post<any>('http://localhost/php/angular.php',formData)
  }

  onSendServiceSignin(formData: FormData): Observable<any> {
    return this.http.post<any>('http://localhost/php/signin.php', formData)
  }

  onStartCamera(formData: FormData): Observable<any> {
    
    return this.http.post<any>('http://192.168.191.137/demo/open_analysis.php', formData)
  }

  onCloseCamera(formData: FormData): Observable<any> {
    return this.http.post<any>('https://192.168.191.137/demo/close_analysis.php', formData)
  }
  

}
