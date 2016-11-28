import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { EditpageComponent } from './editpage/editpage.component';
import { HomeComponent } from './home/home.component';
import { LoggedoutmenuComponent } from './loggedoutmenu/loggedoutmenu.component';
import { LoggedinmenuComponent } from './loggedinmenu/loggedinmenu.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { AuthGuard } from './auth-guard.service';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    EditpageComponent,
    HomeComponent,
    LoggedoutmenuComponent,
    LoggedinmenuComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    LoginService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
