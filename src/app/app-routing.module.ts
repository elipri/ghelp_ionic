import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'task-edit',
    loadChildren: () => import('./task-edit/task-edit.module').then( m => m.TaskEditPageModule)
  },
  {
    path: 'task-edit/:id',
    loadChildren: () => import('./task-edit/task-edit.module').then( m => m.TaskEditPageModule) 
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'plant',
    loadChildren: () => import('./plant/plant.module').then( m => m.PlantPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
