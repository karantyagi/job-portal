import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {JobListComponent} from './components/job-list/job-list.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileRecruiterComponent} from './components/profile-recruiter/profile-recruiter.component';
import {ProfileSeekerComponent} from './components/profile-seeker/profile-seeker.component';
import {RegisterSeekerComponent} from './components/register-seeker/register-seeker.component';
import {RegisterRecruiterComponent} from './components/register-recruiter/register-recruiter.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {JobBoardComponent} from './components/job-board/job-board.component';
import {FooterComponent} from './components/footer/footer.component';
import {JobListServiceClient} from './services/job-list.service.client';
import {FormsModule} from '@angular/forms';
import { SearchFilterPipe } from './components/job-board/job-board.component';
import { ViewJobComponent } from './components/view-job/view-job.component';

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
    FooterComponent,
    SearchFilterPipe,
    ViewJobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    JobListServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
