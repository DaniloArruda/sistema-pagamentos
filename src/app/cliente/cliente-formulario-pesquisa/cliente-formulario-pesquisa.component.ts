import { Component, OnInit } from '@angular/core';

import { ClienteFiltro, ClienteService } from './../cliente.service';
import { PlanoService } from 'src/app/plano/plano.service';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cliente-formulario-pesquisa',
  templateUrl: './cliente-formulario-pesquisa.component.html',
  styleUrls: ['./cliente-formulario-pesquisa.component.css']
})
export class ClienteFormularioPesquisaComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'email', 'plano'];
  clientes = [];
  clienteFiltro = new ClienteFiltro();

  constructor(
    private clienteService: ClienteService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.consultarClientes();
  }

  consultarClientes() {
    this.clienteService.pesquisar(this.clienteFiltro)
      .then(clientes => this.clientes = clientes);
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
