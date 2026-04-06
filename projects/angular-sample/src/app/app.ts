import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexmonsterComposite } from '@flexmonster/angular';
import type { StateInputParams } from '@flexmonster/flexmonster';
import '@flexmonster/flexmonster/flexmonster.css';

@Component({
  selector: 'app-root',
  imports: [FlexmonsterComposite],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
