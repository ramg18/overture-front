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


}
