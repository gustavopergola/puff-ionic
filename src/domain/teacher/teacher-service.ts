import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class TeacherService {
    
    //public dado_id: number;
    private api: string = 'https://icuff17-api.herokuapp.com';
    
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
    
    rate(rating, user, teacher, feedback) {
        return new Promise((resolve, reject) => {
            this._http.post(this.api + '/rate', {'u': user, 't': teacher, 'rating': rating, 'feedback': feedback})
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
    }
    
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
    
    feedback(teacher){
        return new Promise((resolve, reject) => {
            this._http.get(this.api + '/feedback?teacher=' + teacher)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
    }
}