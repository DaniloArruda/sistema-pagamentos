import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { PagamentoService } from '../pagamento/pagamento.service';
import { PlanoService } from '../plano/plano.service';

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
    PagamentoService,
    PlanoService
  ]
})
export class CoreModule { }
