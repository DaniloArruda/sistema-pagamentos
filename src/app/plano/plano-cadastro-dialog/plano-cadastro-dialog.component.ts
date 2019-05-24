import { Component, OnInit, Inject } from '@angular/core';
import { Plano } from 'src/app/core/model/plano';
import { PlanoService } from '../plano.service';
import { MessageService } from 'primeng/api';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-plano-cadastro-dialog',
  templateUrl: './plano-cadastro-dialog.component.html',
  styleUrls: ['./plano-cadastro-dialog.component.css']
})
export class PlanoCadastroDialogComponent implements OnInit {

  plano = new Plano();

  constructor(
    private planoService: PlanoService,
    private messageService: MessageService,
    public dialogRef: MatDialogRef<PlanoCadastroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public planoEdicao: Plano
  ) { }

  ngOnInit() {
    if (this.planoEdicao) {
      this.plano = { ...this.planoEdicao };
    }
  }

  salvar() {
    if (!this.planoEdicao) {
      this.cadastrar();
    } else {
      this.atualizar();
    }
  }

  cadastrar() {
    this.planoService.salvar(this.plano)
      .then(plano => {
        this.messageService.add({severity: 'success', summary: 'Plano salvo com sucesso.'});
      })
      .catch(erro => {
        this.messageService.add({severity: 'error', summary: 'Erro ao cadastrar plano.'});
      });
  }

  atualizar() {
    this.planoService.atualizar(this.plano)
      .then(plano => {
        this.messageService.add({severity: 'success', summary: 'Plano atualizado com sucesso.'});
      })
      .catch(erro => {
        this.messageService.add({severity: 'error', summary: 'Erro ao cadastrar plano.'});
      });
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
