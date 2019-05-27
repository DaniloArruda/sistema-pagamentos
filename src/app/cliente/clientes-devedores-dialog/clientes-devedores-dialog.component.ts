import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { MessageService } from 'primeng/api';
import { Cliente } from 'src/app/core/model/cliente';

@Component({
  selector: 'app-clientes-devedores-dialog',
  templateUrl: './clientes-devedores-dialog.component.html',
  styleUrls: ['./clientes-devedores-dialog.component.css']
})
export class ClientesDevedoresDialogComponent implements OnInit {

  displayedColumns = ['nome'];

  constructor(
    private clienteService: ClienteService,
    private messageService: MessageService,
    public dialogRef: MatDialogRef<ClientesDevedoresDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public clientesDevedores: Cliente[]
  ) { }

  ngOnInit() {
  }

}
