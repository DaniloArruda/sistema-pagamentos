import { Cliente } from 'src/app/core/model/cliente';
import { PlanoService } from '../plano/plano.service';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // clienteUrl = 'https://da-pagamento-api.herokuapp.com/cliente';
  clienteUrl = 'http://localhost:5000/cliente';

  constructor(
    private http: HttpClient,
    private planoService: PlanoService
  ) { }

  private montarHttpParams(filtro: ClienteFiltro) {
    let params = new HttpParams();

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    if (filtro.email) {
      params = params.set('email', filtro.email);
    }

    if (filtro.telefone) {
      params = params.set('telefone', filtro.telefone);
    }

    return params;
  }

  private obterPagamentos(cliente: any) {
    this.planoService.buscarPorId(cliente.plano)
      .then(plano => {
        cliente.planoObj = plano;
      });
  }

  pesquisarResumido(filtro: ClienteFiltro) {
    const params = this.montarHttpParams(filtro);
    return this.http.get(`${this.clienteUrl}?resumo`, { params })
      .toPromise()
      .then(response => response as any);
  }

  pesquisar(filtro: ClienteFiltro) {
    const params = this.montarHttpParams(filtro);

    return this.http.get(this.clienteUrl, { params })
      .toPromise()
      .then(response => {
        const clientes = response as any;

        for (const cliente of clientes) {
          this.planoService.buscarPorId(cliente.plano)
            .then(plano => {
              cliente.planoObj = plano;
            });
        }

        return clientes;
      });
  }

  async buscarPorId(id: string) {
    return this.http.get(`${this.clienteUrl}/${id}?pagamento`)
      .toPromise()
      .then(response => {
        const cliente = response as Cliente;

        if (cliente.pagamentos) {
          for (const pagamento of cliente.pagamentos) {
            pagamento.valor = Number(pagamento.valor);
          }
        }

        return cliente;
      });
  }

  salvar(cliente: Cliente) {
    return this.http.post(`${this.clienteUrl}`, cliente)
      .toPromise()
      .then(clienteSalvo => clienteSalvo as Cliente);
  }

  atualizar(cliente: Cliente) {
    return this.http.put(`${this.clienteUrl}/${cliente._id}`, cliente)
      .toPromise()
      .then(clienteSalvo => clienteSalvo as Cliente);
  }

  excluir(id: string) {
    return this.http.delete(`${this.clienteUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  contar() {
    return this.http.get(`${this.clienteUrl}/quantidade`)
      .toPromise()
      .then(response => response['count']);
  }

  devedores() {
    return this.http.get(`${this.clienteUrl}/devedores`)
      .toPromise()
      .then(response => response as any)
  }

  dinheiroDevendo() {
    return this.http.get(`${this.clienteUrl}/dinheiroDevendo`)
      .toPromise()
      .then(response => {
        const data = response as any;
        return data.valor;
      })
  }
}

export class ClienteFiltro {
  nome: string;
  email: string;
  telefone: string;
}
