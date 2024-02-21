import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  ngStatus: boolean = true;

  statusBtn = 'ON';

  statusBtnChenge(){
    this.statusBtn= 'OFF'
  }
  arrClass = [ 'firstClass', 'onBtn'];

  classObject = {
    'firstClass': true,
    'onBtn'    : true,
    'offBtn'  :  true,
  }

}
