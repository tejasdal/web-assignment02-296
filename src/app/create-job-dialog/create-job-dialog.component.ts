import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Job } from '../job-board/job';

@Component({
  selector: 'app-create-job-dialog',
  templateUrl: './create-job-dialog.component.html',
  styleUrls: ['./create-job-dialog.component.css']
})
export class CreateJobDialogComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<CreateJobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Job) {}
    
  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
