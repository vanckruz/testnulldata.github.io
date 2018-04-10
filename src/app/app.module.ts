import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListWorkersComponent } from './list-workers/list-workers.component';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import { EditWorkerComponent } from './edit-worker/edit-worker.component';
import { DatailWorkerComponent } from './datail-worker/datail-worker.component';


@NgModule({
  declarations: [
    AppComponent,
    ListWorkersComponent,
    NewWorkerComponent,
    EditWorkerComponent,
    DatailWorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
