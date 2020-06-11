import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.page.html',
  styleUrls: ['./task-edit.page.scss'],
})
export class TaskEditPage implements OnInit {
  private todo: {title:string, description:string};
  constructor(private route: ActivatedRoute) {
    this.todo = {
      title:'',
      description:''
    }
   }

   //angular lifecycle method
  ngOnInit() {
    const identifier = this.route.snapshot.paramMap.get('id');
    console.log('Edit Todo: ' + identifier);
  }

  save() {
    console.log('Saving todo');
  }

}
