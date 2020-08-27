import { Component, OnInit } from '@angular/core';
import { ShareService } from '../servicios/share.service';

@Component({
  selector: 'app-entrada-share',
  templateUrl: './entrada-share.component.html',
  styleUrls: ['./entrada-share.component.css']
})
export class EntradaShareComponent implements OnInit {

  users: any;

  asistencia: any;

  usuarioadd: any;

  constructor( private _share: ShareService ) { }

  ngOnInit() {
    this.cargarUsuarios();
  }


  cargarUsuarios() {
    this._share.listUsers().subscribe(
      (res: any) => {
        this.users = res;
        console.log(res);        
      }
    );
  }

  agregarUsuarioAShare(){

  }

}
