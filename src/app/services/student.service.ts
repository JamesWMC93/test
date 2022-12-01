import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) {}
  
  onSendService(formData:FormData):Observable<any>{
    return this.http.post<any>('http://192.168.0.3/face/roll-call/test.php',formData)
  }
  
}
