import { ClienteService } from './../../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  qtdClientes = 0;

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.clienteService.contar()
      .then(quantidade => this.qtdClientes = quantidade);
  }
}
