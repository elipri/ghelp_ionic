import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
//impordin loodud klassi Task ülesannete loomiseks; asub models kataloogis
import { Task } from '../models/task';

//root võimaldab ligi pääseda tervest rakendusest
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //public todos: Array <{title:string, description:string}> = [];
  public todos: Array<Task> = [];
  constructor(private storage: Storage) { }

  load() {
    //console.log('loading data');
    //promise käivitab asünk tegevuse
    this.storage.get('todos').then((data) => {
      if(data != null) {
        this.todos = data;
      } else {
        this.todos = [];
      }
    });
    /* this.todos.push(
      { id:1, title: 'Esimene todo', description: 'See on esimene todo'},
      { id:2, title: 'Teine todo', description: 'See on teine todo'},
      { id:3, title: 'Kolmas todo', description: 'See on kolmas todo'}
    ); */
  }

  getIndex(id: number): number {
    if (this.todos != null) {
      return this.todos.findIndex(x => x.id === id);
    }
    return -1; //if not found
  }

  get(id: number): Task {
    return this.todos.filter(x => x.id === id)[0];
  }

  delete(todo: Task) {
    if (this.todos != null) {
      console.log('Delete todo: ' + todo.id);
      const index = this.getIndex(todo.id);

      if (index !== -1) {
        this.todos.splice(index, 1);
        this.saveTodos();
      }
    }
  }

  saveTodos() {
    this.storage.set('todos', this.todos);
  }

  getAll() {
    var promise = new Promise((resolve, reject) => {
      this.storage.forEach((value, key, index) => {
        this.todos.push(value);
      }).then((d) => {
        resolve(this.todos);
      });
    });
    return promise;
  }

  deleteAll() {
    this.storage.clear();
  }


  getMaxId(): number {
    if (this.todos != null && this.todos.length > 0) {
      return Math.max(0, Math.max.apply(Math, this.todos.map(function(o) { return o.id; })));
    }

    return 0;
  }

  save(todo: Task) {
    //console.log('saving data');
    //const index = this.todos.indexOf(todo);
    console.log(todo);
    if (todo !== null) {
      //if ID has not yet been generated, assign it
      if(todo.id === 0 || todo.id == null) {
        const newId = this.getMaxId() + 1;
        todo.id = newId;
        console.log('Assigning new ID ' + newId);
      }

      const index = this.getIndex(todo.id);

      if (index === -1) {
        console.log('Adding');
        this.todos.push(todo);
      } else {
        console.log('Updating at index ' + index);
        this.todos[index] = todo;
      }

      this.storage.set('todos', this.todos);
    }
  }
}
