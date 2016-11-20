import { Component } from '@angular/core';
import {LoginpageComponent} from './loginpage/loginpage.component'
import {EditpageComponent} from  './editpage/editpage.component'
import 'rxjs/Rx'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  homeActive = "active item";
  loginActive = "item";
  loginpageClicked: boolean = false;
  
  clickHome() {
    if (this.homeActive != "active item") {
      this.homeActive = "active item";
      this.loginActive = "item";
      this.loginpageClicked = false;
    }
  }
  
  clickLogin() {
    if (this.loginActive != "active item") {
      this.loginActive = "active item";
      this.homeActive = "item";
      this.loginpageClicked = true;
    }
  }
}
