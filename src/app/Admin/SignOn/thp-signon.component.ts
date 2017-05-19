import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'thp-signon',
    templateUrl: './thp-signon.template.html'
})

export class THPSignonComponent {
    constructor (private router:Router){
        this.router = router;
    }

    loginUser(userName:string, passWord:string){
        //to do login 
        this.router.navigate(['/Admin/Upload']);
    }
}