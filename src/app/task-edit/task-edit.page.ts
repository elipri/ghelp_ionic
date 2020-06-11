import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.page.html',
  styleUrls: ['./task-edit.page.scss'],
})
export class TaskEditPage implements OnInit {
  private todo: {title:string, description:string};
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private dataService: DataService) {
    this.todo = {
      title:'',
      description:''
    }
   }

   //angular lifecycle method
  ngOnInit() {
    const identifier = this.route.snapshot.paramMap.get('id');
    console.log('Edit Todo: ' + identifier);
    if (identifier != null) {
      this.todo = this.dataService.get(identifier);
    }
  }

  save() {
    console.log('Saving todo');
    this.dataService.save(this.todo);
    this.navCtrl.navigateBack('/tabs/tab2');
  }

}
