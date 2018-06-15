import {RouterModule, Routes} from '@angular/router';
import {JobBoardComponent} from './components/job-board/job-board.component';
import {JobListComponent} from './components/job-list/job-list.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileRecruiterComponent} from './components/profile-recruiter/profile-recruiter.component';
import {ProfileSeekerComponent} from './components/profile-seeker/profile-seeker.component';
import {RegisterSeekerComponent} from './components/register-seeker/register-seeker.component';
import {RegisterRecruiterComponent} from './components/register-recruiter/register-recruiter.component';
import {ViewJobComponent} from './components/view-job/view-job.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: JobBoardComponent},
  // {path: 'job-list', component: JobListComponent},
  {path: 'job-list/:location/:keyword', component: JobListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile-recruiter', component: ProfileRecruiterComponent},
  {path: 'register-recruiter', component: RegisterRecruiterComponent},
  {path: 'profile-seeker', component: ProfileSeekerComponent},
  {path: 'register-seeker', component: RegisterSeekerComponent},
  {path: 'job-list/:location/:keyword/view-job/:jobId', component: ViewJobComponent},
  {path: '**', component: JobBoardComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
