import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private _http: HttpClient) { }

  listUsers() {
    return this._http.get(environment.url + 'listusers');
  }

  GetListItem(){
  	return this._http.get(environment.url + 'listaritems');
  }

  SaveData(users, items) {
  	return this._http.post(environment.url + 'ingresopartida',{ users, items });
  }

  ObtenerPuntosPartida(id) {
    return this._http.get(environment.url + 'ObtenerPuntosPartida/' + id);
  }
}
