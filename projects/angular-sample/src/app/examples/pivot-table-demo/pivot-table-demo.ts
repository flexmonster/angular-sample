import { Component } from '@angular/core';
import { FMFlexmonster } from '@flexmonster/angular';
import type { StateInputParams } from '@flexmonster/js';

@Component({
  selector: 'pivot-table-demo',
  imports: [FMFlexmonster],
  templateUrl: './pivot-table-demo.html',
  styleUrls: ['./pivot-table-demo.css'],
})
export class PivotTableDemo {
  public state: StateInputParams = {
    id: 'fm-state',
    dataset: {
      dataSource: {
        type: 'flexmonster',
        // Step 4.a. Specify the URL of your Flexmonster server
        url: 'wss://demo-server.flexmonster.com:9500',
        // Uncomment the line below to connect to your local Flexmonster server
        // url: "ws://localhost:9501",
        // Step 4.b. Specify the name of your data source
        name: 'StateNames',
      },
    },
    slice: {
      rows: [
        {
          fieldName: 'Year',
        },
        {
          fieldName: 'Gender',
        },
        {
          fieldName: 'Name',
        },
      ],
      values: [
        {
          fieldName: 'Count',
          aggregation: 'sum',
        },
      ],
      columns: [
        {
          fieldName: 'State',
        },
      ],
    },
  };
}
