import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/core/model/cliente';
import { ClienteService } from '../cliente.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  cliente = new Cliente();
  editando = false;

  constructor(
    private clienteService: ClienteService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Novo cliente');
    this.verificarEdicao();
  }

  verificarEdicao() {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.clienteService.buscarPorId(id)
        .then(cliente => {
          this.cliente = cliente;
          this.editando = true;
          this.title.setTitle(`Edição de cliente: ${cliente.nome}`);
        });
    }
  }

  submit(form: FormControl) {
    if (!this.editando) {
      this.salvar(form);
    } else {
      this.atualizar(form);
    }
  }

  salvar(form: FormControl) {
    this.clienteService.salvar(this.cliente)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Cliente cadastrado com sucesso' });

        this.cliente = new Cliente();
        form.reset();
      })
      .catch(erro => {
        this.messageService.add({ severity: 'error', summary: 'Ocorreu um erro ao processar a requisição' });
      });
  }

  atualizar(form: FormControl) {
    this.clienteService.atualizar(this.cliente)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Cliente atualizado com sucesso' });

        this.cliente = new Cliente();
        form.reset();
      })
      .catch(erro => {
        this.messageService.add({ severity: 'error', summary: 'Ocorreu um erro ao processar a requisição' });
      });
  }
}
