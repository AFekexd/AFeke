import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { RefundComponent } from './refund.component';
import { NavModule } from '../nav/nav.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RefundRoutingModule } from './refund-routing.module';
import { AddModule } from './add/add.module';

@NgModule({
  declarations: [RefundComponent],
  imports: [
    CommonModule, RefundRoutingModule, MatToolbarModule, ContainerModule, MatButtonModule, MatIconModule,
    MatDialogModule, NavModule, MatTableModule, AddModule
  ],
  exports: [RefundComponent],
})
export class RefundModule { }
