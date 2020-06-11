import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public todos: Array<{title:string, description:string}>=[];
  constructor() {
    this.todos.push(
      {title:'Esimene todo', description:'See on esimene todo.'},
      {title:'Teine todo', description:'See on teine todo.'},
      {title:'Kolmas todo', description:'See on kolmas todo.'}
    )
  }
  
  addTodo() {
    console.log('blah');
  }
  editTodo() {
    console.log('blah-blah');
  }

}
