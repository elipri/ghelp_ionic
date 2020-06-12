import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  //DATA IS NOW MOVED TO DATA SERVICE!
  //public todos: Array<{title:string, description:string}>=[];

  public form = [
    /* { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false } */
  ];

  constructor(private navCtrl: NavController, private dataService: DataService) {
    /* this.todos.push(
      {title:'Esimene todo', description:'See on esimene todo.'},
      {title:'Teine todo', description:'See on teine todo.'},
      {title:'Kolmas todo', description:'See on kolmas todo.'}
    ); */
  }

  ngOnInit() {
    this.dataService.load();
  }


  openHelp() {
    this.navCtrl.navigateForward('/help');
  }
  addTodo() {
    //console.log('blah');
    //moving to task-edit page
    this.navCtrl.navigateForward('/task-edit');
  }
  editTodo(todo) {
    //console.log('blah-blah');
    //console.log(todo.id+0);
    this.navCtrl.navigateForward(['/task-edit', {id: todo.id}]);
  }

  deleteAll() {
    this.dataService.deleteAll();
    console.log('Deleted all entries, refresh browser');
  }

  getAll() {
    console.log(this.dataService.getAll());
  }

}
