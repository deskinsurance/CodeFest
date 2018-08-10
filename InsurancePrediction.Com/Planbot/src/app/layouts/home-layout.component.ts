import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <app-navbar></app-navbar>
    <div class="container">
    <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class HomeLayoutComponent {}