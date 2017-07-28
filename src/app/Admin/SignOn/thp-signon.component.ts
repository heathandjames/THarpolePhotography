import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {LoginService} from '../../Services/LoginService';

@Component({
    selector: 'thp-signon',
    templateUrl: './thp-signon.template.html'
})

export class THPSignonComponent {
    
    constructor (private router:Router, private loginService:LoginService){
        this.router = router;
        this.loginService = loginService;
        this.loginService.getUser().subscribe((u) => {
            if(u != null){
                this.router.navigate(['/Admin/Upload']);
            }
        });
    }

    loginUser(userName:string, passWord:string){
        //to do login 
        this.loginService.login(userName, passWord);
    }

    keyPressed(event, userName:string, passWord:string){
        if(event.keyCode == 13){
            if(userName && passWord){
                this.loginUser(userName, passWord);
            }
        }
    }
}