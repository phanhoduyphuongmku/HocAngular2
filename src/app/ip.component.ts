import { Component, OnInit } from '@angular/core';
import {PostService} from './post.service';
import {IpService} from './ip.service';


@Component({
    selector: 'app-ip',
    template: '<p>Ip: {{ip}}</p><br>{{posts}}'
})
export class IpComponent implements OnInit {
    ip = '';
    posts = '';
    constructor(private ipService:IpService, private postService:PostService) {}
    ngOnInit() { 
        this.ipService.getIp()
        .then(ip => this.ip = ip)
        .catch(err => this.ip = 'khong lay duoc ip');
        this.postService.getPost()
        .then(post => this.posts = post as string)
        .catch();
    }
}       