import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { NavModule } from '../nav/nav.module';
import { MatTableModule } from '@angular/material/table';
import { DescriptionModule } from '../description/description.module';
import { EditModule } from '../edit/edit.module';
import { AddPaymentModule } from './add-payment/add-payment.module';



@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule, PaymentRoutingModule,
    MatToolbarModule, ContainerModule,
    MatButtonModule, MatIconModule,
    MatDialogModule, NavModule, MatTableModule,
    DescriptionModule, EditModule, AddPaymentModule
  ],
  exports: [PaymentComponent]
})
export class PaymentModule { }
