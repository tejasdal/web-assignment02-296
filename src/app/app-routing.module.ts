import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { JobActivityComponent } from './job-activity/job-activity.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "profile", component: UserProfileComponent},
  { path: "job-board", component: JobBoardComponent},
  { path: "home", component: HomeComponent},
  { path: "job-activity", component: JobActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
