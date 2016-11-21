import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { EditpageComponent } from './editpage/editpage.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'editpage', component: EditpageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    EditpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
