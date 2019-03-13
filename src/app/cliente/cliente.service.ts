import { Cliente } from 'src/app/core/model/cliente';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteUrl = 'http://localhost:3001/pagamento-api/cliente';

  constructor(
    private http: HttpClient
  ) { }

  pesquisar() {
    return this.http.get(this.clienteUrl)
      .toPromise()
      .then(response => response as Cliente[]);
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
