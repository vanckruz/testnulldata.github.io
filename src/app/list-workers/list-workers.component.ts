import { Component, OnInit } from '@angular/core';

import { Worker } from '../interfaces'


@Component({
  selector: 'app-list-workers',
  templateUrl: './list-workers.component.html',
  styleUrls: ['./list-workers.component.css']
})
export class ListWorkersComponent implements OnInit {
  workers: Array<Worker>;

  constructor() { }

  ngOnInit() {
  	this.getWorkers();
  }

  getWorkers(){
  	let workers = JSON.parse(localStorage.getItem("workers"));
  	console.log(typeof workers, workers)
  	if(workers !== null){
  		this.workers = workers;
  	}
  }

  editWorker(i){

  }

  deleteWorker(i){
  	let workers = JSON.parse(localStorage.getItem("workers"));
  	console.log(workers[i])

    workers.splice(i, 1)

    console.log(workers)
    localStorage.setItem("workers", JSON.stringify(workers))
    this.workers = workers;  	
  }


}
