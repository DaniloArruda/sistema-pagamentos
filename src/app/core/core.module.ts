import { FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { NavbarComponent } from './navbar/navbar.component';
import { PagamentoService } from '../pagamento/pagamento.service';
import { PlanoService } from '../plano/plano.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClienteModule } from '../cliente/cliente.module';

import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule
} from '@angular/material';
import { SharedModule } from '../shared/shared.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [NavbarComponent, DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ToastModule,
    ConfirmDialogModule,
    SharedModule,
    ClienteModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
  ],
  exports: [
    NavbarComponent,
    DashboardComponent,
    ToastModule,
    ConfirmDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  providers: [
    PagamentoService,
    PlanoService,

    MessageService,
    ConfirmationService,

    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
