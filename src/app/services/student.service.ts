import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) {}

  onKaiXian(formData: FormData): Observable<any> {
    return this.http.post<any>('http://192.168.0.6/face/roll-call/db_event.php', formData)
  }
  
  onSendService(formData:FormData):Observable<any>{
    return this.http.post<any>('http://localhost/php/angular.php',formData)
  }

  onSendServiceSignin(formData: FormData): Observable<any> {
    return this.http.post<any>('http://localhost/php/signin.php', formData)
  }
  
}
