import { PlanoService } from 'src/app/plano/plano.service';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-pesquisa',
  templateUrl: './cliente-pesquisa.component.html',
  styleUrls: ['./cliente-pesquisa.component.css']
})
export class ClientePesquisaComponent implements OnInit {

  clientes = [];

  constructor(
    private clienteService: ClienteService,
    private planoService: PlanoService
  ) { }

  ngOnInit() {
    this.consultarClientes();
  }

  consultarClientes() {
    this.clienteService.pesquisar()
      .then(clientes => {
        console.log(clientes);
        this.clientes = clientes;
      });
  }

  plano(id: string) {
    this.planoService.buscarPorId(id)
      .then(plano => plano._id);
  }

}
