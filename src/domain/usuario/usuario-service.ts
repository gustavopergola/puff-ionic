import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsuarioService {

    constructor(private _http: Http) {}

    efetuaLogin(email: string, senha: string) {
        alert('fon');
    }
}