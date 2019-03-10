import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { PagamentoService } from '../pagamento/pagamento.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    PagamentoService
  ]
})
export class CoreModule { }
