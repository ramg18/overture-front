import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemService } from '../servicios/item.service';
declare let $;



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: any;
  forma: FormGroup;
  iditem:any;
  nombreitem: any;
  valorpt: any;

  constructor( private fb: FormBuilder, private _items: ItemService ) { }

  ngOnInit() {
    this.crearFormulario();
    this.listarItems();
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['', Validators.required],
      valor: ['', Validators.required]
    });
  }

  listarItems() {
    this._items.listarItems().subscribe(
      (res: any) => {
        console.log(res);
        
        this.items = res;
      }
    );
  }

  crearItem(){
    this._items.crearItem(this.forma.value).subscribe(
      (res: any) => {
        console.log(res);
        
        if (res.state == 'ok') {
          this.forma.reset();
          alert('Item creado exitosamente!');
          this.listarItems();
          
        }
      }
    );
  }

  listarItem(id){
    this.iditem = id;
    this._items.listarItem(this.iditem).subscribe(
      (res:any) => {
        this.nombreitem = res[0].nombre;
        this.valorpt = res[0].valorppt;

        
      }
    );
  }

  actualizar(){
    let data = {
      id: this.iditem,
      nombre: this.nombreitem,
      valorppt: this.valorpt
    }

    this._items.editarItem(data).subscribe(
      (res: any) => {
        if (res === 1) {
          alert('Se ha modificado el item exitosamente!')
          $('#Modal').modal('hide');
          this.listarItems();
        }
        
      }
    );

  }

}
