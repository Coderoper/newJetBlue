import {FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { Router} from '@angular/router';
import { FlightService } from '../flight.service';


@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
  providers: [FlightService]
})
export class FlightListComponent implements OnInit {
  flights: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private flightService: FlightService){}

  ngOnInit(){
    this.flights = this.flightService.getFlights();
  }

  goToDetailPage(clickedFlight){
    this.router.navigate(['flights', clickedFlight.$key])

  };


}
