import {RouterModule, Routes} from '@angular/router';
import {JobBoardComponent} from './components/job-board/job-board.component';
import {JobListComponent} from './components/job-list/job-list.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileRecruiterComponent} from './components/profile-recruiter/profile-recruiter.component';
import {ProfileSeekerComponent} from './components/profile-seeker/profile-seeker.component';
import {ViewJobComponent} from './components/view-job/view-job.component';
import {RegisterComponent} from './components/register/register.component';
import {AdminComponent} from './components/admin/admin.component';
import {PostJobComponent} from './components/post-job/post-job.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: JobBoardComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'job-list/:location/:keyword', component: JobListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile-recruiter', component: ProfileRecruiterComponent},
  {path: 'profile-seeker', component: ProfileSeekerComponent},
  {path: 'job-list/:location/:keyword/view-job/:jobId', component: ViewJobComponent},
  {path: 'post', component: PostJobComponent}, // last
  {path: '**', component: JobBoardComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
