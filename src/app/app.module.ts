import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { CreateJobDialogComponent } from './create-job-dialog/create-job-dialog.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { JobActivityComponent } from './job-activity/job-activity.component';
import { CreateActivityDialogComponent } from './create-activity-dialog/create-activity-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    JobBoardComponent,
    CreateJobDialogComponent,
    NavBarComponent,
    JobActivityComponent,
    CreateActivityDialogComponent
  ],
  entryComponents:[
    CreateJobDialogComponent,
    CreateActivityDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
