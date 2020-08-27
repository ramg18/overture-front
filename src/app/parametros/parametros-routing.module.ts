import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { EntradaShareComponent } from './entrada-share/entrada-share.component';



const routes: Routes = [
  {
      path: 'items', component: ItemsComponent
  },
  {
    path: 'entrada', component: EntradaShareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }