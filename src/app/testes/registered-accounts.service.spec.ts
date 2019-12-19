import { TestBed } from "@angular/core/testing";

import { RegisteredAccountsService } from "./registered-accounts.service";
import { RegisteredAccount } from "./model/registered-account.model";
import { RegisteredAccountsRepository } from "./registered-account.repository";
import { of } from "rxjs";

describe("RegisteredAccountsService", () => {
  let service: RegisteredAccountsService;
  let repository: RegisteredAccountsRepository;

  beforeEach(() => {
    repository = jasmine.createSpyObj("RegisteredAccountsRepository", [
      "getRawRegisteredAccounts"
    ]);
    service = new RegisteredAccountsService(repository);
  });

  it("should return a list of registered accounts asynchronously", (done: DoneFn) => {
    (repository as any).getRawRegisteredAccounts.and.returnValue(of([]));

    service.getRegisteredAccounts().subscribe({
      next: (accounts: RegisteredAccount[]) => {
        expect(accounts).toBeTruthy();
        done();
      }
    });
  });
});
