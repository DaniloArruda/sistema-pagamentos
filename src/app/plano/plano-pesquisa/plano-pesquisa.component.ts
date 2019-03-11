import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plano-pesquisa',
  templateUrl: './plano-pesquisa.component.html',
  styleUrls: ['./plano-pesquisa.component.css']
})
export class PlanoPesquisaComponent implements OnInit {

  planos = [
    { nome: "Plano padrão", valor: 35.00, qtdDados: 5},
    { nome: "Plano master", valor: 50.00, qtdDados: 10},
  ];

  constructor() { }

  ngOnInit() {
  }

}
