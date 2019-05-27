import { ClientesDevedoresDialogComponent } from './../../cliente/clientes-devedores-dialog/clientes-devedores-dialog.component';
import { MatDialog } from '@angular/material';
import { ClienteService, ClienteFiltro } from './../../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  qtdClientes = 0;
  clienteDevedores = [];
  clientesDinheiroDevendo = 0;

  constructor(
    private clienteService: ClienteService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.clienteService.contar()
      .then(quantidade => this.qtdClientes = quantidade);

    this.clienteService.devedores()
      .then(clientes => this.clienteDevedores = clientes);

    this.clienteService.dinheiroDevendo()
      .then(valor => this.clientesDinheiroDevendo = valor);
  }

  valorCardClientesDevedores() {
    const qtdClienteDevedores = this.clienteDevedores.length;
    const percentual = (qtdClienteDevedores / this.qtdClientes) * 100;
    return `${qtdClienteDevedores} (${percentual.toFixed(2)} %)`;
  }

  valorCardDinheiroPerdendo() {
    return `R$ ${this.clientesDinheiroDevendo}`;
  }

  openClientesDevedoresDialog() {
    const dialogRef = this.dialog.open(ClientesDevedoresDialogComponent, {
      width: '400px',
      data: this.clienteDevedores
    });

    // dialogRef.afterClosed().subscribe(() => this.consultarPlanos());
  }
}
