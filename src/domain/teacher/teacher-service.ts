import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class TeacherService {
    
    //public dado_id: number;
    private api: string = 'http://localhost:3000';
    
    public current_teacher: number = 0;
    
    constructor(private _http: Http) {}

    getTeachers() {
        return this._http
            .get(this.api + '/teachers/')
            .map(res => res.json())
            .toPromise()
            .then(lista => {
                return lista;
            });
    }
    
    rate(rating, user, teacher, feedback, current_user) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.set('Authorization', current_user);
            let options = new RequestOptions({ headers: headers });
            this._http.post(this.api + '/rate', {'u': user, 't': teacher, 'rating': rating, 'feedback': feedback}, options)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
    }
    
    // get rate values from teacher
    rating(teacher){
        return new Promise((resolve, reject) => {
            this._http.get(this.api + '/rating?teacher=' + teacher)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
    }
    
    feedback(current_user){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.set('Authorization', current_user);
            let options = new RequestOptions({ headers: headers });
            this._http.get(this.api + '/feedback', options)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
    }

    // get stats for graphical inteface on teachers
    stats(param, current_user){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.set('Authorization', current_user);
            let options = new RequestOptions({ headers: headers });
            this._http.get(this.api + '/stats?' + '&param=' + param, options)
            .map(res => res.json())
            .subscribe(res =>{
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
}