import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlanoPesquisaComponent } from './plano-pesquisa/plano-pesquisa.component';
import { PlanoCadastroComponent } from './plano-cadastro/plano-cadastro.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatTableModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { PlanoCadastroDialogComponent } from './plano-cadastro-dialog/plano-cadastro-dialog.component';

@NgModule({
  declarations: [PlanoPesquisaComponent, PlanoCadastroComponent, PlanoCadastroDialogComponent],
  entryComponents: [PlanoPesquisaComponent, PlanoCadastroComponent, PlanoCadastroDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    TableModule,
    ButtonModule,
    CurrencyMaskModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PlanoModule { }
