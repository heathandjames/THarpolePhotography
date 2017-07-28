import {Component} from '@angular/core';

@Component({
  selector: 'thp-about',
  styleUrls: ['./thp-about.style.css'],
  templateUrl: './thp-about.template.html'  
})

export class THPAboutComponent {
    constructor(){

    }

    doClick(){
      console.log('clicked');
    }
}