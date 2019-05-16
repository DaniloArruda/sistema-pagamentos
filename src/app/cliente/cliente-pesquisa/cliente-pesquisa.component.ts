import { Component, OnInit } from '@angular/core';

import { PlanoService } from 'src/app/plano/plano.service';
import { ClienteService, ClienteFiltro } from '../cliente.service';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cliente-pesquisa',
  templateUrl: './cliente-pesquisa.component.html',
  styleUrls: ['./cliente-pesquisa.component.css']
})
export class ClientePesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
