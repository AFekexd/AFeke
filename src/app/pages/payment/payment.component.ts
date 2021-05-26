import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { Data } from 'src/app/shared/models/data.model';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { DescriptionComponent } from '../description/description.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  title = 'Payment';
  data!: Observable<Data[]>;
  displayedColumns: string[] = ['name', 'toWho', 'amount', 'tamount', 'currency', 'cdate', 'pdate', 'description', 'edit', 'delete'];
  constructor(private dialog: MatDialog, private service: FbBaseService<Data>) { }

  ngOnInit(): void {
    this.get();
  }
  get(): void {
    this.data = this.service.get('payment');
  }

  add(): void {
    const dialogRef = this.dialog.open(AddPaymentComponent, {});
  }

  delete(id: string): void {
    this.service.delete('payment', id);
  }

  printDes(description: string): void {
    const dialogRef = this.dialog.open(DescriptionComponent, { data: { description } });
  }

  editCurrent(sendData: Observable<Data[]>): void {
    const dialogRef = this.dialog.open(EditComponent, { data: sendData });
  }
}
