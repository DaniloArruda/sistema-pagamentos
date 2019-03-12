import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Plano } from '../core/model/plano';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  planoUrl = 'http://localhost:3001/pagamento-api/plano';

  constructor(private http: HttpClient) { }

  listarTodos() {
    return this.http.get(this.planoUrl)
      .toPromise()
      .then(response => response as Plano[]);
  }

  buscarPorId(id: string) {
    return this.http.get(`${this.planoUrl}/${id}`)
      .toPromise()
      .then(response => response as Plano);
  }

  salvar(plano: Plano) {
    return this.http.post(this.planoUrl, plano)
      .toPromise()
      .then(planoSalvo => planoSalvo as Plano);
  }

  atualizar(plano: Plano) {
    return this.http.put(`${this.planoUrl}/${plano._id}`, plano)
      .toPromise()
      .then(planoSalvo => planoSalvo as Plano);
  }

  excluir(id: string) {
    return this.http.delete(`${this.planoUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }
}
