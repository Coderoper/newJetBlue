import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FlightService]
})
export class AdminComponent implements OnInit {

  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string) {
    var newFlight: Flight= new Flight(title, artist, description);
    console.log(newFlight);
    this.flightService.addFlight(newFlight);
  }

}
