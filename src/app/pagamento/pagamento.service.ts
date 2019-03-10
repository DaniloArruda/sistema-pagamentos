import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor() { }

  consultarHistorico(): Promise<any> {
    const pagamentos = [
      { mes: 'JANEIRO', valorPago: 50.0, status: 'OK'},
      { mes: 'FEVEREIRO', valorPago: 50.0, status: 'OK'},
      { mes: 'MARÇO', valorPago: 45.0, status: 'DEVENDO'}
    ];

    return Promise.resolve(pagamentos);
  }
}
