
import { Component } from '@angular/core';

@Component({
    templateUrl:'./word.component.html',
    selector: 'app-word',
    styleUrls: ['./word.component.css']
})

export class WordComponent{
    en:string = 'Hello';
    vn:string = 'Xin chao';
    imgUrl = 'https://s.vnecdn.net/vnexpress/restruct/i/v55/graphics/img_logo_vne_web.gif'
    forgot = false;
    toggleForgot(){
        this.forgot = !this.forgot;
    }
}