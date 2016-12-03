import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class LoginService {

  loggedIn: boolean =  false;

  constructor(private http: Http) { }
  
  isLoggedIn() {
    if (Cookie.get('username') == undefined || Cookie.get('username') == null) {
      return false;
    } else {
      return true;
    }
  }
  
  //Gets currently logged in user
  getUser() {
    return this.http
      .get('/api/login/user')
      .map(res => res.text());
  }

  //Login user
  login(username: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); //Set content type to JSON
    let options = new RequestOptions({ headers: headers }); //Create a request option
    
    //Make http post to login
    return this.http
        .post('/api/login/login', JSON.stringify({username: username, password: password}), options)
        .map(this.extractDataLogin.bind(this));
  }
  
  //Create account for user
  createAccount(username: string, password: string) {
    
    let headers = new Headers({ 'Content-Type': 'application/json' }); //Set content type to JSON
    let options = new RequestOptions({ headers: headers }); //Create a request option
    
    //Make http post to create account
    return this.http
        .post('/api/login', JSON.stringify({username: username, password: password}), options)
        .map(this.extractDataCreateAccount.bind(this));
  }
  
  private extractDataLogin(res: Response) {
    if(res.text() == "Login Success") {
      this.loggedIn = true;
    };
    return res.text();
  }
  
  private extractDataCreateAccount(res: Response) {
    if(res.text() == "Create Account Success") {
      this.loggedIn = true;
    };
    return res.text();
  }
    
}
