import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.page.html',
  styleUrls: ['./task-edit.page.scss'],
})
export class TaskEditPage implements OnInit {
  //private todo: {title:string, description:string};
  private todo: Task;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private dataService: DataService) {
    /* this.todo = {
      title:'',
      description:''
    } */
    this.todo = new Task();
   }

   //angular lifecycle method
  ngOnInit() {
    const identifier = this.route.snapshot.paramMap.get('id');
    //console.log('Edit Todo: ' + identifier);
    if (identifier != null) {
      const item =  this.dataService.get(parseInt(identifier, 10));
      /* this.todo = JSON.parse(JSON.stringify(this.dataService.get(identifier))); */
      this.todo = JSON.parse(JSON.stringify(item));
    }
  }

  save() {
    //console.log('Saving todo');
    this.dataService.save(this.todo);
    this.navCtrl.navigateBack('/tabs/tab2');
  }

}
