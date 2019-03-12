import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { PlanoService } from '../plano.service';
import { Plano } from './../../core/model/plano';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-plano-cadastro',
  templateUrl: './plano-cadastro.component.html',
  styleUrls: ['./plano-cadastro.component.css']
})
export class PlanoCadastroComponent implements OnInit {

  plano = new Plano();
  editando = false;

  constructor(
    private planoService: PlanoService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Novo plano');
    this.verificarEdicao();
  }

  verificarEdicao() {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.planoService.buscarPorId(id)
        .then(plano => {
          this.plano = plano;
          this.title.setTitle(`Edição de plano: ${this.plano.nome}`);
          this.editando = true;
        });
    }
  }

  submit(form: FormControl) {
    if (this.editando) {
      this.atualizar();
    } else {
      this.salvar(form);
    }
  }

  salvar(form: FormControl) {
    this.planoService.salvar(this.plano)
      .then(plano => {
        this.messageService.add({severity: 'success', summary: 'Plano salvo com sucesso.'});
        form.reset();
      })
      .catch(erro => console.log(erro));
  }

  atualizar() {
    this.planoService.atualizar(this.plano)
      .then(plano => {
        this.messageService.add({severity: 'success', summary: 'Plano atualizado com sucesso.'});
      })
      .catch(erro => console.log(erro));
  }
}
