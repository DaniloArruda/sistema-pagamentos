import { Cliente } from 'src/app/core/model/cliente';
import { PlanoService } from '../plano/plano.service';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteUrl = 'https://da-pagamento-api.herokuapp.com/cliente';

  constructor(
    private http: HttpClient,
    private planoService: PlanoService
  ) { }

  pesquisar(filtro: ClienteFiltro) {
    let params = new HttpParams();

    console.log(filtro);

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    if (filtro.email) {
      params = params.set('email', filtro.email);
    }

    if (filtro.telefone) {
      params = params.set('telefone', filtro.telefone);
    }

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

  buscarPorId(id: string) {
    return this.http.get(`${this.clienteUrl}/${id}`)
      .toPromise()
      .then(response => response as Cliente);
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
}

export class ClienteFiltro {
  nome: string;
  email: string;
  telefone: string;
}
