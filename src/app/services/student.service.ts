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

  onLogin(formData: FormData): Observable<any> {
    return this.http.post<any>('http://192.168.182.226/face/roll-call/db_login.php', formData)
  }

  onReadrecord(formData: FormData): Observable<any> {
    return this.http.post<any>('http://192.168.182.226/face/roll-call/db_read_record.php', formData)
  }


  onCheckEvent(formData: FormData): Observable<any> {
    return this.http.post<any>('http://192.168.182.226/face/roll-call/db_read_event.php', formData)
  }

  onRegisterEvent(formData: FormData): Observable<any> {
    return this.http.post<any>('http://192.168.0.6/face/roll-call/db_event.php', formData)
  }
  
  onSendService(formData:FormData):Observable<any>{
    return this.http.post<any>('http://localhost/php/angular.php',formData)
  }

  onSendServiceSignin(formData: FormData): Observable<any> {
    return this.http.post<any>('http://localhost/php/signin.php', formData)
  }
  

}
