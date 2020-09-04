import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { EntradaShareComponent } from './entrada-share/entrada-share.component';
import { MostrarPuntosPartidaComponent } from './mostrar-puntos-partida/mostrar-puntos-partida.component';



const routes: Routes = [
	{
	  	path: 'items', component: ItemsComponent
	},
	{
		path: 'entrada', component: EntradaShareComponent
	},
	{ 
  		path: 'MostrarPartida/:data', component: MostrarPuntosPartidaComponent 
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }