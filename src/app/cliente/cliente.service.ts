import { Cliente } from 'src/app/core/model/cliente';
import { PlanoService } from '../plano/plano.service';

import { HttpClient } from '@angular/common/http';
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

  pesquisar() {
    return this.http.get(this.clienteUrl)
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
