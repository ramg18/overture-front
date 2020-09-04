import { Component, OnInit } from '@angular/core';
import { ShareService } from '../servicios/share.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entrada-share',
  templateUrl: './entrada-share.component.html',
  styleUrls: ['./entrada-share.component.css']
})
export class EntradaShareComponent implements OnInit {

  users: any;
  items: any;
  UserAdd: any;
  ItemAdd: any;
  ItemAmount: any;
  ArrayUsersAssistance: Array<any> = [];
  ArrayItemsAmount: Array<any> = [];

  constructor( private _share: ShareService, private router: Router ) { }

  ngOnInit() {
    this.cargarUsuarios();
    this.GetListItems();
  }

  cargarUsuarios() {
    this._share.listUsers().subscribe(
      (res: any) => {
        this.users = res;      
      }
    );
  }

  GetListItems(){
    this._share.GetListItem().subscribe((response: any) => {
        this.items = response;  
      });
  }

  AddUserAssistance(){
    let _BlExistUser = this.ArrayUsersAssistance.filter(x => x.id == this.UserAdd).length > 0 ? true : false;

    if (!_BlExistUser) {
      let _UserTmp = this.users.filter(x => x.id == this.UserAdd)[0];
      let _NewUserObject = {
        id: _UserTmp.id,
        first_name: _UserTmp.first_name,
        last_name: _UserTmp.last_name
      };

      this.ArrayUsersAssistance.push(_NewUserObject);
    } else {
      alert('Usuario agregado con anterioridad.');
    }
  }

  DeleteUserAssistance(id){
    this.ArrayUsersAssistance = this.ArrayUsersAssistance.filter(x => x.id != id);
  }

  AddItemAmount(){
    let _BlExistItem = this.ArrayItemsAmount.filter(x => x.id == this.ItemAdd).length > 0 ? true : false;

    if (!_BlExistItem) {
      let _ItemTmp = this.items.filter(x => x.id == this.ItemAdd)[0];
      let _NewItemObject = {
        id: _ItemTmp.id,
        name: _ItemTmp.nombre,
        amount: this.ItemAmount
      };

      this.ArrayItemsAmount.push(_NewItemObject);
    } else {
      alert('Item agregado con anterioridad.');
    }
  }

  DeleteItemAmount(id){
    this.ArrayItemsAmount = this.ArrayItemsAmount.filter(x => x.id != id);
  }

  SaveData(){
    this._share.SaveData(this.ArrayUsersAssistance, this.ArrayItemsAmount).subscribe((response: any ) => {
      this.router.navigateByUrl("parametros/MostrarPartida/" + response, { skipLocationChange: true });
    });
  }
}
