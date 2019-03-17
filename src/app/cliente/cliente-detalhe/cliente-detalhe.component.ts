import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/core/model/cliente';
import { ClienteService } from '../cliente.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {

  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.buscarCliente();
  }

  buscarCliente() {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.clienteService.buscarPorId(id)
        .then(cliente => {
          this.cliente = cliente;
        })
        .catch(erro => {
          this.messageService.add({ severity: 'error', summary: 'O id informado não existe' });
        });
    }
  }
}
