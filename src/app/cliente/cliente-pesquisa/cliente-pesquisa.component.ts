import { Component, OnInit } from '@angular/core';

import { PlanoService } from 'src/app/plano/plano.service';
import { ClienteService } from '../cliente.service';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cliente-pesquisa',
  templateUrl: './cliente-pesquisa.component.html',
  styleUrls: ['./cliente-pesquisa.component.css']
})
export class ClientePesquisaComponent implements OnInit {

  clientes = [];

  constructor(
    private clienteService: ClienteService,
    private planoService: PlanoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.consultarClientes();
  }

  consultarClientes() {
    this.clienteService.pesquisar()
      .then(clientes => this.clientes = clientes);
  }

  plano(id: string) {
    this.planoService.buscarPorId(id)
      .then(plano => plano._id);
  }

  confirmarExclusao(cliente) {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja excluir ${cliente.nome}?`,
      accept: () => this.excluir(cliente)
    });
  }

  excluir(cliente) {
    this.clienteService.excluir(cliente._id)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: `${cliente.nome} excluído com sucesso`});
        this.consultarClientes();
      })
      .catch(erro => {
        this.messageService.add({ severity: 'error', summary: 'Ocorreu um erro na requisição'});
        console.log('Ocorreu um erro na requisição', erro);
      });
  }

}
