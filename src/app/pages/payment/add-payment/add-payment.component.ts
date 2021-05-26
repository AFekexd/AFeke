import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Data } from 'src/app/shared/models/data.model';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})

export class AddPaymentComponent implements OnInit {
  pform: FormGroup = new FormGroup({
    id: new FormControl(''),
    pname: new FormControl(''),
    sname: new FormControl(''),
    amount: new FormControl(0),
    tamount: new FormControl(0),
    description: new FormControl(''),
    currency: new FormControl('EUR'),
    cdate: new FormControl(Date.now),
    pdate: new FormControl(Date.now)
  });
  public data: Data;
  constructor(public dialogRef: MatDialogRef<AddPaymentComponent>, private service: FbBaseService<Data>) {
    this.data = new Data();
  }

  ngOnInit(): void {
  }

  sendData(): void {
    if (this.pform.valid) {
        this.data.name = this.pform.value.sname;
        this.data.toWho = this.pform.value.pname;
        this.data.amount = this.pform.value.amount;
        this.data.tamount = this.pform.value.tamount;
        this.data.description = this.pform.value.description;
        this.data.currency = this.pform.value.currency;
        this.data.cdate = this.pform.value.cdate;
        this.data.pdate = this.pform.value.pdate;
        this.service.addPayment('payment', this.data);
        return;
    }
  }
}
