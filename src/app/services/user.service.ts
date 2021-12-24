import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {RequestbaseService} from "./requestbase.service";
import { AuthService } from './auth.service';
const API_URL = environment.BASE_URL + '/api/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RequestbaseService {

  constructor(authenticationService: AuthService, http: HttpClient) {
    super(authenticationService, http);
  }

  changeRole(newRole: string): Observable<any> {
    return this.http.put(API_URL + '/change/' + newRole, {}, {headers: this.getHeaders});
  }
}
