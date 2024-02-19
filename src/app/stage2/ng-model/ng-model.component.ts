import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent {
  nameRandom : string = 'MAsage from Comp1'
  // Example 1
  currentData : Date = new Date();
  // Example 2
  userName: string = '';
  // Example 3
  gender: string = '';
  // Example 4
  selectedOption: any = '';
  // Example 5
  items = [
    { name: 'Item 1'},
    { name: 'Item 2'},
    { name: 'Item 3'},
    { name: ''}
  ];
  addItem(){
    this.items.push({ name: ''});
  }
  removeItem(index: number){
    this.items.splice(index, 1)
  }

}
