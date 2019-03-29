import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email = '';
  senha = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.email, this.senha)
      .then(() => this.router.navigate(['/historico']))
      .catch(erro => {
        console.log(erro);
        this.messageService.add({ severity: 'error', summary: 'Ocorreu um erro' });
      });
  }

}
