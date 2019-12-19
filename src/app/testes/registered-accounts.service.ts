import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { RegisteredAccount } from "./model/registered-account.model";
import { RegisteredAccountsRepository } from "./registered-account.repository";

@Injectable({
  providedIn: "root"
})
export class RegisteredAccountsService {
  constructor(private repository: RegisteredAccountsRepository) {}

  public getRegisteredAccounts(): Observable<RegisteredAccount[]> {
    return this.repository.getRawRegisteredAccounts();
  }
}
