import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsuarioService {
    
    //public dado_id: number;
    private api: string = 'https://icuff17-api.herokuapp.com/users/2';
    constructor(private _http: Http) {}

    efetuaLogin() {
        
        return this._http
            .get(this.api)
            .map(res => res.json())
            .toPromise()
            .then(dado => {
                return dado.id;
            });
    }
    
}