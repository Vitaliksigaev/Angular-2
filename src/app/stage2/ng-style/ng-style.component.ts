import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  bgTrue: boolean =true;

  sizeBox: number = 10;
  sizeBoxH: number = 10;

  getStyle(){
    return {
      'color' : 'red',
      'font-size': this.bgTrue? '24px' : ' 16px'
    }
  }



}

// git init
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Vitaliksigaev/Angular-2.git
// git push -u origin main