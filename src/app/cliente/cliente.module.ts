import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClientePesquisaComponent } from './cliente-pesquisa/cliente-pesquisa.component';

import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ClienteCadastroComponent, ClienteFormularioComponent, ClienteDetalheComponent, ClientePesquisaComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    RouterModule,

    FieldsetModule,
    TableModule,
    ButtonModule,
  ]
})
export class ClienteModule { }
