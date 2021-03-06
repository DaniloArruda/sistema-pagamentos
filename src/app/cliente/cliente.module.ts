import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClientePesquisaComponent } from './cliente-pesquisa/cliente-pesquisa.component';
import { ClienteFormularioPesquisaComponent } from './cliente-formulario-pesquisa/cliente-formulario-pesquisa.component';
import { ClientesDevedoresDialogComponent } from './clientes-devedores-dialog/clientes-devedores-dialog.component';

import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MatTableModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    ClienteCadastroComponent,
    ClienteFormularioComponent,
    ClienteDetalheComponent,
    ClientePesquisaComponent,
    ClienteFormularioPesquisaComponent,
    ClientesDevedoresDialogComponent
  ],
  entryComponents: [
    ClientesDevedoresDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    RouterModule,

    FieldsetModule,
    TableModule,
    ButtonModule,
    CdkTableModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ClienteFormularioPesquisaComponent,
    CdkTableModule,
    MatTableModule
  ]
})
export class ClienteModule { }
