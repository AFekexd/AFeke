import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Data } from 'src/app/shared/models/data.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  edit: FormGroup = new FormGroup({
    id: new FormControl(this.data.id),
    pname: new FormControl(this.data.toWho),
    sname: new FormControl(this.data.name),
    amount: new FormControl(this.data.amount),
    tamount: new FormControl(this.data.tamount),
    description: new FormControl(this.data.description),
    currency: new FormControl(this.data.currency),
    cdate: new FormControl(this.data.cdate),
    pdate: new FormControl(this.data.pdate)
  });
  public udata = new Data();
  constructor(public dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private service: FbBaseService<Data>) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  sendData(): void {
    this.udata.id = this.edit.value.id;
    this.udata.name = this.edit.value.sname;
    this.udata.toWho = this.edit.value.pname;
    this.udata.amount = this.edit.value.amount;
    this.udata.tamount = this.edit.value.tamount;
    this.udata.description = this.edit.value.description;
    this.udata.currency = this.edit.value.currency;
    this.udata.cdate = this.edit.value.cdate;
    this.udata.pdate = this.edit.value.pdate;
    console.log(this.udata);
    this.service.update(this.udata);
  }

}
