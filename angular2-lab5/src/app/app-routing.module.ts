import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { EditpageComponent } from './editpage/editpage.component';
import { HomeComponent } from './home/home.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'editpage/:username', component: EditpageComponent, canActivate: [AuthGuard] },
  {path: '**', redirectTo: '/home' }
];

//, canActivate: [AuthGuard]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}