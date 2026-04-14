import { Component } from '@angular/core';
import { FMFlexmonster } from '@flexmonster/angular';
import type { StateInputParams } from '@flexmonster/flexmonster';

@Component({
  selector: 'app-root',
  imports: [FMFlexmonster],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  public state: StateInputParams = {
    id: 'fm-state',
    dataset: {
      dataSource: {
        type: 'json',
        url: 'https://cdn.flexmonster.com/data/retail-data.json',
      },
    },
    slice: {
      rows: [
        { name: 'Retail Category' },
        { name: 'Status' },
      ],
      columns: [
        { name: 'Country' },
      ],
      values: [
        { name: 'Price', aggregation: 'sum' },
      ],
    },
  };
}
