import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.css']
})
export class ClienteFormularioComponent implements OnInit {

  @Input()
  somenteLeitura = false;

  @Input()
  cliente = {};

  constructor() { }

  ngOnInit() {
  }

}
