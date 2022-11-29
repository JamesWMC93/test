import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) {}
  
  onSendService(formData:FormData):Observable<any>{
    return this.http.post<any>('http://localhost:80/php/angular.php',formData)
  }
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   req = req.clone({
  //     setHeaders: { /*有關CORS的參數就可以改在這裡了*/
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Credentials': 'true',
  //       'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS, PATCH',
  //       'Access-Control-Max-Age': '86400'
  //     }
  //   });
  //   return next.handle(req);

  // }
}
