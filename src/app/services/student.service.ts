import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
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

  GetService(){
    return this.httpClient.get<any>('http://localhost:8080/angular.php')
    .pipe(map((res:any) =>{
      return res;
    }))
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
