import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PagamentoRegistroComponent } from './pagamento-registro/pagamento-registro.component';
import { PagamentoHistoricoComponent } from './pagamento-historico/pagamento-historico.component';

import { TableModule } from 'primeng/table';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [PagamentoRegistroComponent, PagamentoHistoricoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    TableModule,
    CurrencyMaskModule
  ],
  exports: [
    PagamentoRegistroComponent
  ]
})
export class PagamentoModule { }
