import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  // 1
  showElement = true;
  // 2
  showElementP: boolean = true;
  showElementClick(){
    this.showElementP = !this.showElementP;
  }

  clickCount: number = 0;
  clickCountPlus(){
    this.clickCount++;
  }

  inputPasw: string='';

  statusServerA:boolean = true;

}
