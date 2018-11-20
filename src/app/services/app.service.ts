import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

// Interface
import { Login } from '../interfaces/login';

const api = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public isAdmin: boolean = false;
  public httpOptions;

  constructor(private _http: Http, private router: ActivatedRoute) {
    const admin = JSON.parse(localStorage.getItem('admin'));
    if(this.router.firstChild.routeConfig.path == 'admin' && admin){
      this.httpOptions = {
         headers: new Headers({
           'Content-Type':  'application/json',
           'Authorization': `${admin.access_token}${admin.token}`
         }) 
      }
    }else{
      const user = JSON.parse(localStorage.getItem('currentUser'));
      if(user) { 
        this.httpOptions = {
          headers: new Headers({
            'Content-Type':  'application/json',
            'Authorization': `${user.access_token}${user.token}`
          })
        }
      }else{
        this.httpOptions = {
          headers: new Headers({
            'Content-Type':  'application/json',
            'Authorization': `Token`
          })
        }
      }
    }
}

  // Login
  login(params) {
    return this._http.post(`${api}/login`, params);
  }

  // Registration
  registration (params) {
    return this._http.post(`${api}/registration`, params);
  }
  //Admin
  // Admin login
  adminLogin(param) {
    return this._http.post(`${api}/admin-login`, param);
  }

  // Get all users
  getUsers() {
    return this._http.get(`${api}/get-users`, this.httpOptions);
  }

  //Admin update user
  update(param) {
    return this._http.put(`${api}/admin-update/${param.id}`, param, this.httpOptions);
  }

  //Admin get user by id
  getUser(id) {
    return this._http.get(`${api}/get-user/${id}`, this.httpOptions);
  }

  //Admin delete user by id
  deleteUser(id) {
    return this._http.delete(`${api}/delete-user/${id}`, this.httpOptions);
  }

  //Admin create user
  registrationUser(param) {
    return this._http.post(`${api}/registration-user`, param, this.httpOptions);
  }
}
