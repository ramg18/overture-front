import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { ParametrosComponent } from './parametros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParametrosRoutingModule } from './parametros-routing.module';
import { ItemsComponent } from './items/items.component';
import { EntradaShareComponent } from './entrada-share/entrada-share.component';
import { MostrarPuntosPartidaComponent } from './mostrar-puntos-partida/mostrar-puntos-partida.component';

@NgModule({
  declarations: [ParametrosComponent, ItemsComponent, EntradaShareComponent, MostrarPuntosPartidaComponent],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports: [
    ParametrosComponent
  ]
})
export class ParametrosModule { }
