import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DemoHeader } from './ui-elements/header/demo-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DemoHeader],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
