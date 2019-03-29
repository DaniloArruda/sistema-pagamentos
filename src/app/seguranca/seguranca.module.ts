import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { AuthGuard } from './auth.guard';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [ 'localhost:5000', 'da-pagamento-api.herokuapp.com' ],
        blacklistedRoutes: [ 'localhost:5000/usuario', 'https://da-pagamento-api.herokuapp.com/usuario' ]
      }
    })
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class SegurancaModule { }
