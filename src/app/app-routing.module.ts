import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
