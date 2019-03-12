import { Plano } from './../../core/model/plano';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { PlanoService } from '../plano.service';

@Component({
  selector: 'app-plano-cadastro',
  templateUrl: './plano-cadastro.component.html',
  styleUrls: ['./plano-cadastro.component.css']
})
export class PlanoCadastroComponent implements OnInit {

  plano = new Plano();

  constructor(
    private planoService: PlanoService
  ) { }

  ngOnInit() {
  }

  submit(form: FormControl) {
    console.log('chamou!');
    this.salvar(form);
  }

  salvar(form: FormControl) {
    this.planoService.salvar(this.plano)
      .then(plano => {
        console.log('Plano salvo!', plano);
        form.reset();
      })
      .catch(erro => console.log(erro));
  }
}
