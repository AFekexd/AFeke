import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Data } from 'src/app/shared/models/data.model';
import { DescriptionComponent } from '../description/description.component';
import { EditComponent } from '../edit/edit.component';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss']
})
export class RefundComponent implements OnInit {
  title = 'Payment';
  data!: Observable<Data[]>;
  displayedColumns: string[] = ['name', 'toWho', 'amount', 'tamount', 'currency', 'cdate', 'pdate', 'description', 'edit', 'delete'];
  constructor(private dialog: MatDialog, private service: FbBaseService<Data>) { }

  ngOnInit(): void {
    this.get();
  }
  get(): void {
    this.data = this.service.get('refund');
  }

  add(): void {
    const dialogRef = this.dialog.open(AddComponent, {});
  }

  delete(id: string): void {
    this.service.delete('refund', id);
  }

  printDes(description: string): void {
    const dialogRef = this.dialog.open(DescriptionComponent, { data: { description } });
  }

  editCurrent(sendData: Observable<Data[]>): void {
    const dialogRef = this.dialog.open(EditComponent, { data: sendData });
  }
}
