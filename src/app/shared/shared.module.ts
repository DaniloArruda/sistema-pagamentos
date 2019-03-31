import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule { }