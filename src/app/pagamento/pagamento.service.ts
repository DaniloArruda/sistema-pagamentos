import { Cliente } from "./../core/model/cliente";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PagamentoService {
  // pagamentoUrl = 'https://da-pagamento-api.herokuapp.com/pagamento';
  pagamentoUrl = "http://localhost:5000/pagamento";

  constructor(private http: HttpClient) {}

  consultarHistorico(): Promise<any> {
    const pagamentos = [
      { mes: "JANEIRO", valorPago: 50.0, status: "OK" },
      { mes: "FEVEREIRO", valorPago: 50.0, status: "OK" },
      { mes: "MARÇO", valorPago: 45.0, status: "DEVENDO" }
    ];

    return Promise.resolve(pagamentos);
  }

  registrarPagamento(body) {
    return this.http
      .post(this.pagamentoUrl, body)
      .toPromise()
      .then(clienteAtualizado => clienteAtualizado as Cliente);
  }
}
