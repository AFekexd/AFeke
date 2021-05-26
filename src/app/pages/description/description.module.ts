import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DescriptionComponent } from './description.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [DescriptionComponent],
  imports: [
    CommonModule, MatButtonModule, MatIconModule
  ],
  exports: [DescriptionComponent]
})
export class DescriptionModule { }
