import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { promise } from 'protractor';

@Injectable()
export class PostService {
    constructor(private http:Http){}
    getPost(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
        .toPromise()
        .then(res => res.json())
        .then(resJson=>resJson.posts = JSON.stringify(resJson))
        .catch(err => console.log(err));
    }
}