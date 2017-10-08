import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RoutesListComponent } from '../../components/routes-list/routes-list.component';

const appRoutes: Routes = [
  { path: '', component: RoutesListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
