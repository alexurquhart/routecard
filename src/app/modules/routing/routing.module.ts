import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RoutesListComponent } from '../../pages/routes-list/routes-list.component';
import { AddRouteComponent } from '../../pages/add-route/add-route.component';

const appRoutes: Routes = [
  { path: '', component: RoutesListComponent },
  { path: 'routes/add', component: AddRouteComponent }
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
