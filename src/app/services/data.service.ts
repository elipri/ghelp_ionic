import { Injectable } from '@angular/core';
//impordin loodud klassi Task ülesannete loomiseks; asub models kataloogis
import { Task } from '../models/task';

//root võimaldab ligi pääseda tervest rakendusest
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //public todos: Array <{title:string, description:string}> = [];
  public todos: Array<Task> = [];
  constructor() { }

  load() {
    //console.log('loading data');
    this.todos.push(
      { id:1, title: 'Esimene todo', description: 'See on esimene todo'},
      { id:2, title: 'Teine todo', description: 'See on teine todo'},
      { id:3, title: 'Kolmas todo', description: 'See on kolmas todo'}
    );
  }

  getIndex(id: number): number {
    return this.todos.findIndex(x => x.id === id);
  }
  get(id: number): Task {
    return this.todos.filter(x=> x.id === id)[0];
  }

  save(todo: Task) {
    //console.log('saving data');
    const index = this.todos.indexOf(todo);
    if (todo != null) {
      const index = this.getIndex(todo.id);
      if (index === -1) {
        console.log('Adding');
        this.todos.push(todo);
      } else {
        console.log('Updating at index ' + index);
        this.todos[index] = todo;
      }
    }
  }
}
