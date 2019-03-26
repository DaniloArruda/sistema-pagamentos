import meses from 'src/app/core/util/meses';
import { Pagamento } from './../../core/model/pagamento';
import { Component, OnInit } from '@angular/core';

import { Cliente } from './../../core/model/cliente';
import { ClienteService, ClienteFiltro } from './../../cliente/cliente.service';
import { PagamentoService } from '../pagamento.service';

import { MessageService } from 'primeng/api';
import * as moment from 'moment';

@Component({
  selector: 'app-pagamento-historico',
  templateUrl: './pagamento-historico.component.html',
  styleUrls: ['./pagamento-historico.component.css']
})
export class PagamentoHistoricoComponent implements OnInit {

  clientes = [];
  clienteId = '';
  clienteSelecionado: Cliente;
  mensalidades = [];
  mesesDoAno = meses;

  constructor(
    private pagamentoService: PagamentoService,
    private clienteService: ClienteService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.consultarClientes();
  }

  consultarHistorico() {
    this.pesquisarCliente().then(() => {
      this.construirDadosTabela();
    });
  }

  consultarClientes() {
    this.clienteService.pesquisarResumido(new ClienteFiltro())
      .then(clientes => this.clientes = clientes);
  }

  pesquisarCliente() {
    return this.clienteService.buscarPorId(this.clienteId)
      .then(cliente => {
        this.clienteSelecionado = cliente;
        return null;
      })
      .catch(erro => this.messageService.add({
        severity: 'error',
        summary: 'Ocorreu um erro',
      }));
  }

  construirDadosTabela() {
    this.mensalidades = [];
    const mesAtual = new Date().getMonth() + 1;

    for (let mes = 1; mes <= mesAtual; mes++) {
      const mensalidade = { mes, valorPago: 0, status: 'DEVENDO' };

      for (const pagamento of this.clienteSelecionado.pagamentos) {
        const mesPagamento = moment(pagamento.data, 'YYYY-MM-DD').toDate().getMonth() + 1;
        if (mes === mesPagamento) {
          mensalidade.valorPago += Number(pagamento.valor);
        }
      }

      if (mensalidade.valorPago >= this.clienteSelecionado.planoObj.valor) {
        mensalidade.status = 'OK';
      }

      this.mensalidades.push(mensalidade);
    }
  }
}
