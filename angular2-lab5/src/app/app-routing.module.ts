import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoggedinhomeComponent } from './loggedinhome/loggedinhome.component';
import { EditpageComponent } from './editpage/editpage.component';
import { HomeComponent } from './home/home.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { DmcapolicyComponent } from './dmcapolicy/dmcapolicy.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { VersionsComponent } from './versions/versions.component';

import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'dmca', component: DmcapolicyComponent },
  { path: 'editpage/:title', component: EditpageComponent, canActivate: [AuthGuard] },
  { path: 'editpage', component: EditpageComponent, canActivate: [AuthGuard] },
  { path: 'loggedinhome', component: LoggedinhomeComponent, canActivate: [AuthGuard] },
  { path: 'fullscreen/:title/:owner', component: FullscreenComponent },
  { path: 'versions/:title/:owner', component: VersionsComponent },
  {path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}