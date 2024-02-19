import { Component } from '@angular/core';

@Component({
  selector: 'app-hw-input',
  templateUrl: './hw-input.component.html',
  styleUrls: ['./hw-input.component.css']
})
export class HwInputComponent {
  inputUserName: string ='';
  statusBtnUserReset: boolean = true;

  resetUserName() {
    this.inputUserName = ''
  }
}
