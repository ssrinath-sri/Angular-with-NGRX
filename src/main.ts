import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './user/data-access/counter.reducer';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, StoreModule],
  template: `
    <h1>Hello from {{name}}!</h1>
  `,
})
export class App {
  name = 'Angular with ngrx store management';
}

bootstrapApplication(App);
