import { Component } from '@angular/core';

@Component({
  selector: 'app-solution42',
  templateUrl: './solution42.component.html',
  styleUrls: ['./solution42.component.css']
})
export class Solution42Component {

  showElement:boolean=false;
  arrayClick: any = [];
  clickN: number = 0;

  clickBtn(){
    this.showElement= true;
    console.log('btn click');
    this.clickN++;
    this.arrayClick.push(this.clickN);
  }



}
