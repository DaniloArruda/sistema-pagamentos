import { Component, OnInit } from '@angular/core';

import { PlanoService } from '../plano.service';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Plano } from 'src/app/core/model/plano';

@Component({
  selector: 'app-plano-pesquisa',
  templateUrl: './plano-pesquisa.component.html',
  styleUrls: ['./plano-pesquisa.component.css']
})
export class PlanoPesquisaComponent implements OnInit {

  planos = [];
  displayedColumns: string[] = ['nome', 'valor', 'qtdDados', 'actions'];

  constructor(
    private planoService: PlanoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.consultarPlanos();
  }

  consultarPlanos() {
    this.planoService.listarTodos()
      .then(planos => this.planos = planos);
  }

  confirmarExclusao(plano: Plano) {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja excluir o ${plano.nome}`,
      accept: () => this.excluir(plano)
    });
  }

  excluir(plano: Plano) {
    this.planoService.excluir(plano._id)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: `${plano.nome} excluído.` });

        this.consultarPlanos();
      })
      .catch(erro => {
        console.log('Ocorreu um erro', erro);
        this.messageService.add({ severity: 'error', summary: 'Ocorreu um erro ao processar a requisição.' });
      });
  }

}
