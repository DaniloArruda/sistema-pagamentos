import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagamentoRegistroComponent } from './pagamento/pagamento-registro/pagamento-registro.component';
import { PagamentoHistoricoComponent } from './pagamento/pagamento-historico/pagamento-historico.component';
import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component';
import { ClienteDetalheComponent } from './cliente/cliente-detalhe/cliente-detalhe.component';

const routes: Routes = [
  { path: 'pagamento', component: PagamentoRegistroComponent },
  { path: 'historico', component: PagamentoHistoricoComponent },
  { path: 'cliente/cadastro', component: ClienteCadastroComponent },
  { path: 'cliente/detalhe', component: ClienteDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
