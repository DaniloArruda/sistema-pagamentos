import { Component, ChangeDetectorRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from './seguranca/auth.service';
import { MatSidenav } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'pagamento';

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  @ViewChild('snav') sidenav: MatSidenav;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private auth: AuthService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.sidenav.open();
    moment.locale('pt-br');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  exibindoNavbar() {
    return this.router.url !== '/login';
  }

  logout() {
    this.auth.logout();
    this.sidenav.close();
    this.router.navigate(['/login']);
  }
}
