import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlanoPesquisaComponent } from './plano-pesquisa/plano-pesquisa.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PlanoCadastroComponent } from './plano-cadastro/plano-cadastro.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [PlanoPesquisaComponent, PlanoCadastroComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    TableModule,
    ButtonModule,
    CurrencyMaskModule
  ]
})
export class PlanoModule { }
