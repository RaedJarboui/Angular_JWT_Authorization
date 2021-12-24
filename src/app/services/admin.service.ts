import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { RequestbaseService } from './requestbase.service';
const API_URL = environment.BASE_URL + '/api/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService extends RequestbaseService {

  constructor(protected authenticationService: AuthService, protected http: HttpClient) {
    super(authenticationService,http);
  }
  findAllUsers():Observable<any>{
    return this.http.get(API_URL +"/all",{headers:this.getHeaders});
    

  }
  findSingleUser(id:number):Observable<any>{
    return this.http.get(`http://localhost:8080/api/admin/${id}`,{headers:this.getHeaders});
    

  }
}
