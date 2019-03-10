import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';

import { FieldsetModule } from 'primeng/fieldset';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

@NgModule({
  declarations: [ClienteCadastroComponent, ClienteFormularioComponent, ClienteDetalheComponent],
  imports: [
    CommonModule,
    FormsModule,

    FieldsetModule,
    BrowserAnimationsModule
  ]
})
export class ClienteModule { }
