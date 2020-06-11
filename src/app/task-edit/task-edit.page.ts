import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.page.html',
  styleUrls: ['./task-edit.page.scss'],
})
export class TaskEditPage implements OnInit {
  private todo: {title:string, description:string};
  constructor() {
    this.todo = {
      title:'',
      description:''
    }
   }

   //angular lifecycle method
  ngOnInit() {
  }

  save() {
    console.log('Saving todo');
  }

}
