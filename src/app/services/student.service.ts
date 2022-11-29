import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url ='https://raw.githubusercontent.com/tankhaihong/test/main/project.json';
  private urllist ='https://raw.githubusercontent.com/tankhaihong/test/main/list.json';
  private urlactivity ='https://raw.githubusercontent.com/tankhaihong/test/main/activity.json';

  constructor(private httpClient: HttpClient)  {}
  onSendService(fromData:FormData):Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/angular.php',fromData)
  }
  
  getSignin(){
    return this.httpClient.get(this.url);
  }

  getActivity(){
    return this.httpClient.get(this.urlactivity);
  }

  getNamelist(){
    return this.httpClient.get(this.urllist);
  }
} 
