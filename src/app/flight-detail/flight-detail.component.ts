import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Flight } from '../flight.model';
import { FlightService } from '../flight.service'
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css'],
  providers: [FlightService]
})
export class FlightDetailComponent implements OnInit {
  flightId: string;
  flightToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private flightService: FlightService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.flightId = urlParameters['id'];
    });
    this.flightToDisplay = this.flightService.getFlightById(this.flightId);
  }

}
