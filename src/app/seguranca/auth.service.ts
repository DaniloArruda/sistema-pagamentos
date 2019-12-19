import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authUrl = "https://da-pagamento-api.herokuapp.com/usuario/autenticar";
  jwtPayload: any;
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {
    this.carregarToken();
  }

  login(email: string, senha: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http
      .post(this.authUrl, { email, senha }, httpOptions)
      .toPromise()
      .then(response => {
        console.log("logou", response);
        this.armazenarToken(response["token"]);
      });
  }

  armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem("token", token);
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem("token");

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    this.limparAccessToken();
  }

  private limparAccessToken() {
    localStorage.removeItem("token");
    this.jwtPayload = null;
  }

  private carregarToken() {
    const token = localStorage.getItem("token");

    if (token) {
      this.armazenarToken(token);
    }
  }
}
