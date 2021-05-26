import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DescriptionComponent>, @Inject(MAT_DIALOG_DATA) public desctrip: any) { }
  data!: string;
  ngOnInit(): void {
    if (this.desctrip.description === '') {
      this.data = 'No description';
    }
    else {
      this.data = this.desctrip.description;
    }
  }

}
