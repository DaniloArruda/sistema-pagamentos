import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {

  cliente = {
    nome: 'Danilo Arruda',
    email: 'danilo@email.com',
  };


  constructor() { }

  ngOnInit() {
  }

}
