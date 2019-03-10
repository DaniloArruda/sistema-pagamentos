import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRegistroComponent } from './pagamento-registro/pagamento-registro.component';
import { PagamentoHistoricoComponent } from './pagamento-historico/pagamento-historico.component';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [PagamentoRegistroComponent, PagamentoHistoricoComponent],
  imports: [
    CommonModule,
    
    TableModule
  ],
  exports: [
    PagamentoRegistroComponent
  ]
})
export class PagamentoModule { }
