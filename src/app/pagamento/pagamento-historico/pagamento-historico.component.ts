import { Component, OnInit } from '@angular/core';
import { PagamentoService } from '../pagamento.service';

@Component({
  selector: 'app-pagamento-historico',
  templateUrl: './pagamento-historico.component.html',
  styleUrls: ['./pagamento-historico.component.css']
})
export class PagamentoHistoricoComponent implements OnInit {

  pagamentos = [];

  constructor(
    private pagamentoService: PagamentoService
  ) { }

  ngOnInit() {
    this.consultarHistorico();
  }

  consultarHistorico() {
    this.pagamentoService.consultarHistorico()
      .then(pagamentos => this.pagamentos = pagamentos);
  }

}
