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
import { AdminComponent } from './components/admin/admin.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import {SaveJobService} from './services/save-job.service';
import { ExperienceListComponent } from './components/experience-list/experience-list.component';
import { AwardListComponent } from './components/award-list/award-list.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { EducationListComponent } from './components/education-list/education-list.component';
import { ExtraCurricularListComponent } from './components/extra-curricular-list/extra-curricular-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { CertificateListComponent } from './components/certificate-list/certificate-list.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { JobSeekerDashboardComponent } from './components/job-seeker-dashboard/job-seeker-dashboard.component';
import {RecruiterDashboardComponent} from './components/recruiter-dashboard/recruiter-dashboard.component';
import {JobPostingService} from './services/job-posting.service';
import {RecruiterDetailService} from './services/recruiter-detail.service';
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
    RegisterComponent,
    AdminComponent,
    PostJobComponent,
    ExperienceListComponent,
    AwardListComponent,
    SkillListComponent,
    EducationListComponent,
    ExtraCurricularListComponent,
    ProjectListComponent,
    CertificateListComponent,
    PersonalInfoComponent,
    UserSidebarComponent,
    JobSeekerDashboardComponent,
    RecruiterDashboardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    JobListingService,
    UserService,
    SaveJobService,
    JobPostingService,
    RecruiterDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
