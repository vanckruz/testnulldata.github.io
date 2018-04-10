import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewWorkerComponent } from './new-worker/new-worker.component';     // Add this
import { EditWorkerComponent } from './edit-worker/edit-worker.component';  // Add this
import { ListWorkersComponent } from './list-workers/list-workers.component';  // Add this
import { DatailWorkerComponent } from './datail-worker/datail-worker.component';  // Add this

const routes: Routes = [
  {
    path: '',
    component: ListWorkersComponent
  },
  {
    path: 'new',
    component: NewWorkerComponent
  }	,
  {
    path: 'edit/:id',
    component: EditWorkerComponent
  },
  {
    path: 'detail',
    component: DatailWorkerComponent
  }	    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
