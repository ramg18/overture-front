import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _http: HttpClient) { }

  crearItem(data) {
    
    return this._http.post( environment.url + 'crearitem', data );
  }

  listarItems() {
    return this._http.get( environment.url + 'listaritems' );
  }

  listarItem(id) {
    return this._http.get( environment.url + 'listaritem/' + id );
  }

  editarItem(data) {
    return this._http.put( environment.url + 'editaritem', data );
  }

}
