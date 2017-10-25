import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class UsuarioService {
    
    //public dado_id: number;
    private api: string = 'https://icuff17-api.herokuapp.com';
    
    private current_user: string = 'randomString';
    
    constructor(private _http: Http) {}

    efetuaLogin() {
        return this._http
            .get(this.api + 'users/2')
            .map(res => res.json())
            .toPromise()
            .then(dado => {
                return dado.id;
            });
    }
    
    saveUser(data) {
        return new Promise((resolve, reject) => {
            this._http.post(this.api + '/users', {'user': {'reg': data.reg, 'password': data.password, 'name': data.name}})
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
    }
    
    login(data){
        return new Promise((resolve, reject) => {
            this._http.post(this.api + '/login', {'reg': data.reg, 'password': data.password})
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
    }
    
    setCurrentUser(reg){
        this.current_user = reg;
    }
    
    getCurrentUser(){
        return this.current_user;
    }
    
}