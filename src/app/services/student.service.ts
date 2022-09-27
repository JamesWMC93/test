import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url ='https://raw.githubusercontent.com/tankhaihong/test/main/project.json'

  constructor(private httpClient: HttpClient) {}
  getPosts(){
    return this.httpClient.get(this.url);
  }
}
