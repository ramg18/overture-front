import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from '../servicios/share.service';
import { ItemService } from '../servicios/item.service';

@Component({
  selector: 'app-mostrar-puntos-partida',
  templateUrl: './mostrar-puntos-partida.component.html',
  styleUrls: ['./mostrar-puntos-partida.component.css']
})
export class MostrarPuntosPartidaComponent implements OnInit {
	id: any;
	LstUser:any;
	LstItems : any;
	DataCompleta: Array<any> = [];

  	constructor(public _activeRoute: ActivatedRoute, private _share: ShareService, private _items: ItemService) { 
		this.id = _activeRoute.snapshot.paramMap.get('data');
  	}

  	ngOnInit() {
  		this.ConsultarPuntosAsistencia();
  	}

  	ConsultarPuntosAsistencia() {
  		this._share.listUsers().subscribe((ListUser:any) => {
        	this.LstUser = ListUser;
        });

        this._share.GetListItem().subscribe((item:any) => {
        	this.LstItems = item;
        });

  		this._share.ObtenerPuntosPartida(this.id).subscribe(
      		(res: any) => {
        		for (let i = 0; i < res.length ; i++) {
        			let ItemName;
        			let UserName;

        			UserName = this.LstUser.filter(x => x.id == res[i].id_usuario)[0].first_name + ' ' + this.LstUser.filter(x => x.id == res[i].id_usuario)[0].last_name;
        			ItemName = this.LstItems.filter(x => x.id == res[i].id_item)[0].nombre;

        			let _Object = {
        				id_usuario: res[i].id_usuario,
        				nombre_usuario: UserName,
        				id_item: res[i].id_item,
        				nombre_item: ItemName,
        				total_puntos: res[i].puntos_total_item
        			};
        			
        			this.DataCompleta.push(_Object);
        		}
      	}
    );
  	}
}
