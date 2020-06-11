import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  //public todos: Array<{title:string, description:string}>=[];
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
    this.navCtrl.navigateForward(['/task-edit', {id: todo.title}]);
  }

}
