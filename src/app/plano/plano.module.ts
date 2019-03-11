import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanoPesquisaComponent } from './plano-pesquisa/plano-pesquisa.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [PlanoPesquisaComponent],
  imports: [
    CommonModule,
    
    TableModule,
    ButtonModule
  ]
})
export class PlanoModule { }
