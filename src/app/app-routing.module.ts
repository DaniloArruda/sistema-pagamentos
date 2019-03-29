import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentoRegistroComponent } from './pagamento/pagamento-registro/pagamento-registro.component';
import { PagamentoHistoricoComponent } from './pagamento/pagamento-historico/pagamento-historico.component';
import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component';
import { ClienteDetalheComponent } from './cliente/cliente-detalhe/cliente-detalhe.component';
import { PlanoPesquisaComponent } from './plano/plano-pesquisa/plano-pesquisa.component';
import { PlanoCadastroComponent } from './plano/plano-cadastro/plano-cadastro.component';
import { ClientePesquisaComponent } from './cliente/cliente-pesquisa/cliente-pesquisa.component';
import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { AuthGuard } from './seguranca/auth.guard';

const routes: Routes = [
  { path: 'pagamento', component: PagamentoRegistroComponent, canActivate: [AuthGuard] },
  { path: 'historico', component: PagamentoHistoricoComponent, canActivate: [AuthGuard] },
  { path: 'cliente', component: ClientePesquisaComponent, canActivate: [AuthGuard] },
  { path: 'cliente/cadastro', component: ClienteCadastroComponent, canActivate: [AuthGuard] },
  { path: 'cliente/:id', component: ClienteCadastroComponent, canActivate: [AuthGuard] },
  { path: 'cliente/detalhe/:id', component: ClienteDetalheComponent, canActivate: [AuthGuard] },
  { path: 'plano', component: PlanoPesquisaComponent, canActivate: [AuthGuard] },
  { path: 'plano/cadastro', component: PlanoCadastroComponent, canActivate: [AuthGuard] },
  { path: 'plano/:id', component: PlanoCadastroComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginFormComponent },
  { path: '', redirectTo: 'historico', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
