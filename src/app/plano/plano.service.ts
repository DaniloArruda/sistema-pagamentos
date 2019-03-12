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

  salvar(plano: Plano) {
    console.log('entrou no serviço');
    return this.http.post(this.planoUrl, plano)
      .toPromise()
      .then(response => {
        const planoSalvo = response as Plano;
        console.log(planoSalvo);

        return planoSalvo;
      });
  }
}
