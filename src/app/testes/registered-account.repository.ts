import { Observable, of } from "rxjs";

export class RegisteredAccountsRepository {
  public getRawRegisteredAccounts(): Observable<any[]> {
    return of([]);
  }
}
