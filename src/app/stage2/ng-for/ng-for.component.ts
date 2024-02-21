import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  arrItem = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'];

  person = {
    name: 'NAME',
    age: '300'
  };


  // Метод если мы хотим поменять местами ключи и их значения. ХЗ 
  originalObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  // reversedObject = Object.fromEntries(
  //   Object.entries(this.originalObject).map(([key, value]) => [value, key])
  // );

  trackByFunction(index: number, item: any): any {
    return item.id; // Возвращает уникальный идентификатор элемента
  }


  users = [
    { id: 1, name: 'Джон', age: 25 },
    { id: 2, name: 'Джейн', age: 30 },
    { id: 3, name: 'Боб', age: 35 },
  ];

  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
  }
  trackByUserId(index: number, user: any): number {
    return user.id;
  }

}