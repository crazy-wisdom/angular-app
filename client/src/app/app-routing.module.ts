import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodeListComponent } from './node-list/node-list.component';


const routes: Routes = [
  { path: 'nodes', component: NodeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
