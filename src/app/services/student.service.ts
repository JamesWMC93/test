import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url ='https://raw.githubusercontent.com/tankhaihong/test/main/project.json';
  private urllist ='https://raw.githubusercontent.com/tankhaihong/test/main/list.json';
  private urlactivity ='https://raw.githubusercontent.com/tankhaihong/test/main/activity.json';

  constructor(private httpClient: HttpClient) {}
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
