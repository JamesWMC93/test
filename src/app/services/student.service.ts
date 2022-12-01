import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) {}
  
  onSendService(formData:FormData):Observable<any>{
    return this.http.post<any>('http://localhost:8080/angular.php',formData)
  }
  
}
