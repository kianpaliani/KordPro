import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  
  loginUsername: string = "";
  loginPassword: string = "";
  createAccountUsername: string = "";
  createAccountPassword: string = "";

  constructor(private loginService: LoginService, private router: Router) {}
  
  login() {
    this.loginService.login(this.loginUsername, this.loginPassword)
    .subscribe(isSuccess => {
      if (isSuccess == "Login Success") {
        console.log("Logged in");
        this.router.navigateByUrl('/loggedinhome');
      } else {
        alert("Login Failed");
        this.loginUsername = "";
        this.loginPassword = "";
      }
    });
  }
  
  createAccount() {
    
    if (/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(this.createAccountUsername)) {
      if (this.createAccountUsername != "" && this.createAccountPassword != "") {
        this.loginService.createAccount(this.createAccountUsername, this.createAccountPassword)
        .subscribe(isSuccess => {
          if (isSuccess == "Create Account Success") {
            console.log("created account");
            this.router.navigateByUrl('/loggedinhome');
          } else if (isSuccess == "Email already exists") {
            alert("Email is taken");
            this.createAccountUsername = "";
            this.createAccountPassword = "";
          } else {
            alert("Create account failed");
            this.createAccountUsername = "";
            this.createAccountPassword = "";
          }
        });
      } else {
        alert("Create account fields cannot be empty");
        this.createAccountUsername = "";
        this.createAccountPassword = "";
      }
    } else {
      alert("An email must be used");
      this.createAccountUsername = "";
      this.createAccountPassword = "";
    }
  }
  
  ngOnInit() {
    //Navigate to logged in home if already logged in
    if(this.loginService.isLoggedIn()) {
      this.router.navigateByUrl('/loggedinhome');
    }
  }

}
