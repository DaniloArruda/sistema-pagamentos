import { ClienteService, ClienteFiltro } from "./../../cliente/cliente.service";
import meses from "src/app/core/util/meses";
import { PagamentoService } from "../pagamento.service";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-pagamento-registro",
  templateUrl: "./pagamento-registro.component.html",
  styleUrls: ["./pagamento-registro.component.css"]
})
export class PagamentoRegistroComponent implements OnInit {
  mesesDoAno = meses;
  mes = meses[new Date().getMonth()].numero;
  ano = new Date().getFullYear();
  valor: number;
  clientes = [];
  clienteSelecionado = "";

  constructor(
    private clienteService: ClienteService,
    private pagamentoService: PagamentoService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.consultarClientes();
  }

  consultarClientes() {
    this.clienteService
      .pesquisar(new ClienteFiltro())
      .then(clientes => (this.clientes = clientes));
  }

  registrarPagamento(form: FormControl) {
    const data = new Date(`${this.mes}/01/${this.ano}`);
    const body = {
      cliente: this.clienteSelecionado,
      pagamento: {
        data,
        valor: this.valor
      }
    };

    this.pagamentoService.registrarPagamento(body).then(clienteAtualizado => {
      this.messageService.add({
        severity: "success",
        summary: "Pagamento registrado com sucesso."
      });
      form.reset();
    });
  }

  get clientesComoOptions() {
    return this.clientes.map(cliente => ({
      key: cliente._id,
      caption: cliente.nome
    }));
  }
}
