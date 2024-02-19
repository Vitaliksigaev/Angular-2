import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  serverId: number = 10;
  serverIdMetod(){
    return this.serverId;
  }

  textlenght: string = 'Abra cadabra';
  getTextLenght(){
    return this.textlenght.length;
  }

  product = { name: 'Phone', price: 300};
  
  isActive: boolean = true;

  count: number = 0;
  countPlus() {
    this.count++;
  }

  statusBtn: boolean = true;
  constructor(){
    setInterval(() => {
      this.statusBtn = !this.statusBtn;
    }, 2000)
  }

}
