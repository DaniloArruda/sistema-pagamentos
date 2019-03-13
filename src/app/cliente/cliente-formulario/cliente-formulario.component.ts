import { Component, OnInit, Input } from '@angular/core';

import { PlanoService } from 'src/app/plano/plano.service';
import { Cliente } from 'src/app/core/model/cliente';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.css']
})
export class ClienteFormularioComponent implements OnInit {

  @Input()
  somenteLeitura = false;

  @Input()
  cliente: Cliente;

  planos = [];

  constructor(
    private planoService: PlanoService
  ) { }

  ngOnInit() {
    this.consultarPlanos();
  }

  consultarPlanos() {
    this.planoService.listarTodos()
      .then(planos => this.planos = planos);
  }
}
