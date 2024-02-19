import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  serverStatus: boolean = true;
  buttonStyle: any = {};
  changeStatus(){
    this.serverStatus =  !this.serverStatus;
    this.buttonStyle['background-color'] = this.serverStatus ? 'green' : 'red';
  }

  onInputChange(event: any) {
    const value = event.target.value;
    console.log('Input value is: ', value)
  }

  onInputKeyDown(event: KeyboardEvent){
    console.log('Key pressed:', event.key)
  }
  divText: string = 'HOVER ME PLEASE'
  onMouseEnter(){
    console.log('Mouse entered the element!')
    this.divText = 'PLEASE LEAVE - YOU ARE SO BIG!!!'
  }
  onMouseLeave(){
    console.log('Mouse left the element!')
    this.divText = 'HOVER ME PLEASE- You are littel boy!'
  }


}
