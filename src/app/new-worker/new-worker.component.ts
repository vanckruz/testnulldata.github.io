import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';  
declare var google: any;

@Component({
  selector: 'app-new-worker',
  templateUrl: './new-worker.component.html',
  styleUrls: ['./new-worker.component.css']
})
export class NewWorkerComponent implements AfterViewInit, OnInit{
  form: FormGroup;
  latLngUser: any;
  markerUser: any;
  mapUser: any;
  place: any;
	@ViewChild('direccion') direccion: ElementRef;
  @ViewChild('map') mapElement: ElementRef;

  constructor(public fb: FormBuilder, private route: ActivatedRoute, private router: Router) { 
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.compose([
      	Validators.required,
      	Validators.email
      	])],
      fechaNacimiento: ['', Validators.required],
      direccion: ['', Validators.required]
    });    
    this.place = "";
  }

  ngOnInit() {
  	// this.loadMap();
  }

  ngAfterViewInit(){
    // (<any>window).googleMapsReady=this.loadMap.bind(this);
    //  var script = document.createElement("script");
    // script.type = "text/javascript";
    // document.getElementsByTagName("head")[0].appendChild(script);
    // script.src = "http://maps.google.com/maps/api/js?key=AIzaSyCTihzOZ4Uwl-QfqBZ6Vvcw1eSC0JaGyFc&libraries=places&sensor=false";
    this.loadMap();
  }

  loadMap(){

    navigator.geolocation.getCurrentPosition((position)=>{
	    this.latLngUser = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

	    let mapOptions = {
	      center: this.latLngUser,
	      zoom: 12,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    }    	

		this.mapUser = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

	    this.markerUser = new google.maps.Marker({
	      position: this.latLngUser,
	      map: this.mapUser,
	      title: 'Te encuentras en aquí',
	      draggable: true,
	      animation: google.maps.Animation.DROP,
	    })	    


	    this.markerUser.addListener('dragend', () => {
	      // console.log(this.markerUser);
	      let geocoder = new google.maps.Geocoder();
	      let latlng = { lat: this.markerUser.position.lat(), lng: this.markerUser.position.lng() };
	      geocoder.geocode({ 'location': latlng }, (results, status) => {
	        if (status === 'OK') {
	          console.log(results[0].formatted_address);

	          let result = results[0];

            this.direccion.nativeElement.value =  result.formatted_address;
            
	        } else {
	          alert('Geocode was not successful for the following reason: ' + status);       
	        }
	      });
	    });    

    	// console.log(position, this.mapUser)
    });

  }

	save(){
		if (this.form.valid) {
		console.log(this.form.value)
		let worker = {
			nombre: this.form.value.nombre,
			email: this.form.value.email,
			fechaNacimiento: this.form.value.fechaNacimiento,
			direccion: this.form.value.direccion
		}

  	let workers = JSON.parse(localStorage.getItem("workers"));

  	if(workers === null){
  		let workers = new Array()
  		workers.push(worker)
  		console.log(workers);
  		localStorage.setItem("workers", JSON.stringify(workers));
  	}else{
  		workers.push(worker);
  		console.log(workers);
  		localStorage.setItem("workers", JSON.stringify(workers));
  	}
		this.router.navigate(['']);  	
		}
	}
}
