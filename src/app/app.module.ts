import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { LoginComponent } from './login/login.component';
import { ProfileRecruiterComponent } from './profile-recruiter/profile-recruiter.component';
import { ProfileSeekerComponent } from './profile-seeker/profile-seeker.component';
import { RegisterSeekerComponent } from './register-seeker/register-seeker.component';
import { RegisterRecruiterComponent } from './register-recruiter/register-recruiter.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { FooterComponent } from './footer/footer.component';
import {JobListServiceClient} from './services/job-list.service.client';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    LoginComponent,
    ProfileRecruiterComponent,
    ProfileSeekerComponent,
    RegisterSeekerComponent,
    RegisterRecruiterComponent,
    NavBarComponent,
    JobBoardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    JobListServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
