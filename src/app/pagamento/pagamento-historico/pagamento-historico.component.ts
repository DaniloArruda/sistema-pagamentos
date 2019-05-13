import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Cliente } from './../../core/model/cliente';
import { ClienteService, ClienteFiltro } from './../../cliente/cliente.service';
import { PagamentoService } from '../pagamento.service';
import meses from 'src/app/core/util/meses';

import { MessageService } from 'primeng/api';
import * as moment from 'moment';

@Component({
  selector: 'app-pagamento-historico',
  templateUrl: './pagamento-historico.component.html',
  styleUrls: ['./pagamento-historico.component.css']
})
export class PagamentoHistoricoComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteId = '';
  clienteResumoSelecionado: any;
  clienteSelecionado: Cliente;
  mensalidades = [];
  mesesDoAno = meses;
  myControl = new FormControl();
  clientesFiltrados: Observable<Cliente[]>;

  constructor(
    private clienteService: ClienteService,
    private messageService: MessageService,
  ) { }

  async ngOnInit() {
    await this.consultarClientes();
    this.clientesFiltrados = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: any): Cliente[] {
    let filterValue: string;
    if (value._id) {
      filterValue = value.nome.toLowerCase();
    } else {
      filterValue = value.toLowerCase();
    }

    return this.clientes.filter(cliente => cliente.nome.toLowerCase().includes(filterValue));
  }

  displayFn(cliente: Cliente) {
    if (cliente) { return cliente.nome; }
  }

  consultarHistorico() {
    this.pesquisarCliente().then(() => {
      this.construirDadosTabela();
    });
  }

  consultarClientes() {
    return this.clienteService.pesquisarResumido(new ClienteFiltro())
      .then(clientes => this.clientes = clientes);
  }

  pesquisarCliente() {
    return this.clienteService.buscarPorId(this.clienteResumoSelecionado._id)
      .then(cliente => {
        this.clienteSelecionado = cliente;
        return null;
      })
      .catch(erro => {
        this.messageService.add({
          severity: 'error',
          summary: 'Ocorreu um erro',
        });
      });
  }

  construirDadosTabela() {
    this.mensalidades = [];
    const mesAtual = new Date().getMonth() + 1;

    for (let mes = 1; mes <= mesAtual; mes++) {
      const mensalidade = { mes, valorPago: 0, status: 'DEVENDO' };

      if (this.clienteSelecionado.pagamentos) {
        for (const pagamento of this.clienteSelecionado.pagamentos) {
          const mesPagamento = moment(pagamento.data, 'YYYY-MM-DD').toDate().getMonth() + 1;
          if (mes === mesPagamento) {
            mensalidade.valorPago += Number(pagamento.valor);
          }
        }
      }

      if (mensalidade.valorPago >= this.clienteSelecionado.planoObj.valor) {
        mensalidade.status = 'OK';
      }

      this.mensalidades.push(mensalidade);
    }
  }
}
