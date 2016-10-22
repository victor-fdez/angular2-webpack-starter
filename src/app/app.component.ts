/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { Title } from './home/title';

import { MdlDialogOutletService } from 'angular2-mdl';
import { ViewContainerRef } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  providers: [
    Title
  ],
  template: `
  <mdl-layout mdl-layout-fixed-header mdl-layout-header-seamed>
    <mdl-layout-header>
      <mdl-layout-header-row>
        <mdl-layout-title>{{ title.value }}</mdl-layout-title>
        <mdl-layout-spacer></mdl-layout-spacer>
        <!-- Navigation. We hide it in small screens. -->
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <a class="mdl-navigation__link" [routerLink]=" ['./'] ">
            FILTERS
          </a>
          <a class="mdl-navigation__link" >
            STATS
          </a>
          <!-- <a class="mdl-navigation__link" [routerLink]=" ['./home'] ">
            Home
          </a>
          <a class="mdl-navigation__link" [routerLink]=" ['./detail'] ">
            Detail
          </a> -->
          <a class="mdl-navigation__link" [routerLink]=" ['./about'] ">
            ABOUT
          </a>
        </nav>
      </mdl-layout-header-row>
    </mdl-layout-header>
    <mdl-layout-drawer>
      <mdl-layout-title>{{ title.value }}</mdl-layout-title>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" [routerLink]=" ['./'] ">
          FILTERS
        </a>
        <a class="mdl-navigation__link" >
          STATS
        </a>
        <!-- <a class="mdl-navigation__link" [routerLink]=" ['./home'] ">
          Home
        </a>
        <a class="mdl-navigation__link" [routerLink]=" ['./detail'] ">
          Detail
        </a> -->
        <a class="mdl-navigation__link" [routerLink]=" ['./about'] ">
          ABOUT
        </a>
      </nav>
    </mdl-layout-drawer>
    <mdl-layout-content>
      <!-- Your content goes here -->
      <main>
        <router-outlet class='contentfilterinator-container'></router-outlet>
      </main>


      <footer class="mdl-mini-footer">
        <div class="mdl-mini-footer__left-section">
          <div class="mdl-logo">Berrysafe</div>
          <ul class="mdl-mini-footer__link-list">
            <li><a href="#">Help</a></li>
            <li><a href="#">Privacy & Terms</a></li>
            <li>Baddevs.io &copy; {{ copyYear }}</li>
          </ul>
        </div>
      </footer>
      <!-- <footer>
      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
        <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
        <div>
          <a [href]="url">
            <img [src]="angularclassLogo" width="25%">
            </a>
          </div>
        </footer> -->

      </mdl-layout-content>
    </mdl-layout>

  `
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  copyYear: number;

  constructor(
    public appState: AppState,
    public title: Title,
    private dilalogOuletService: MdlDialogOutletService,
    private viewConatinerRef: ViewContainerRef
    ) {

    this.copyYear = new Date().getFullYear();
    this.dilalogOuletService.setDefaultViewContainerRef(this.viewConatinerRef);
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
