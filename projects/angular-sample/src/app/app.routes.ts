import { Routes } from '@angular/router';
import { PivotTableDemo } from './examples/pivot-table-demo/pivot-table-demo';

export const routes: Routes = [
  { path: 'pivot-table-demo', component: PivotTableDemo },
  { path: '**', redirectTo: 'pivot-table-demo' },
];
