import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileRecruiterComponent} from './components/profile-recruiter/profile-recruiter.component';
import {ProfileSeekerComponent} from './components/profile-seeker/profile-seeker.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {JobBoardComponent} from './components/job-board/job-board.component';
import {FooterComponent} from './components/footer/footer.component';
import {SearchFilterPipe} from './components/job-board/job-board.component';
import {ViewJobComponent} from './components/view-job/view-job.component';
import {JobListingService} from './services/job-listing.service';
import {UserService} from './services/user.service';
import {JobListComponent} from './components/job-list/job-list.component';
import {RegisterComponent} from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileRecruiterComponent,
    ProfileSeekerComponent,
    NavBarComponent,
    JobBoardComponent,
    FooterComponent,
    SearchFilterPipe,
    ViewJobComponent,
    JobListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    JobListingService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
