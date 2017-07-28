import { Component } from '@angular/core';
import { LoginService } from "app/Services/LoginService";
import { Router } from "@angular/router";

@Component ({
    selector: 'thp-navbar',
    styleUrls: ['./thp-navbar.style.css'],
    templateUrl: './thp-navbar.template.html'
})
export class THPNavbarComponent {
    private isAdminMenu = false;

    constructor(private router:Router, private loginService:LoginService){
       this.loginService = loginService;

       this.loginService.getUser().subscribe((u) => {
           if(u){
            this.isAdminMenu = true;
           }
           else {
               this.isAdminMenu = false;
           }
       });
    }

    signOut(){
        this.loginService.logout();
        this.router.navigate(['Home']);
    }

}