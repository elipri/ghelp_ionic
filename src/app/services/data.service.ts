import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public todos: Array <{title:string, description:string}> = [];

  constructor() { }

  load() {
    console.log('loading data');
    this.todos.push(
      { title: 'Esimene todo', description: 'See on esimene todo'},
      { title: 'Teine todo', description: 'See on teine todo'},
      { title: 'Kolmas todo', description: 'See on kolmas todo'}
    );
  }

  save(todo) {
    console.log('saving data');
  }
}
