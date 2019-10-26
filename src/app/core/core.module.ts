import { FormsModule } from "@angular/forms";
import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";

import { NavbarComponent } from "./navbar/navbar.component";
import { PagamentoService } from "../pagamento/pagamento.service";
import { PlanoService } from "../plano/plano.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ClienteModule } from "../cliente/cliente.module";

import { ToastModule } from "primeng/toast";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { MessageService, ConfirmationService } from "primeng/api";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatDialogModule
} from "@angular/material";
import { DropdownMenuService } from "./dropdown-menu.service";
import { CardComponent } from "./card/card.component";
import { MoreActionsComponent } from "./more-actions/more-actions.component";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent,
    CardComponent,
    MoreActionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ToastModule,
    ConfirmDialogModule,
    ClienteModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    NavbarComponent,
    DashboardComponent,
    CardComponent,
    MoreActionsComponent,
    ToastModule,
    ConfirmDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [
    PagamentoService,
    PlanoService,

    MessageService,
    ConfirmationService,
    DropdownMenuService,

    { provide: LOCALE_ID, useValue: "pt-BR" }
  ]
})
export class CoreModule {}
