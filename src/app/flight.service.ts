import { Flight } from './flight.model';
import { FLIGHTS } from './mock-flights';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FlightService {
  flights: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.flights = database.list('flights'); }
  getFlights(){
    return this.flights;
  }
  addFlight(newFlight: Flight){
    this.flights.push(newFlight);
  }

  getFlightById(flightId: string){
    return this.database.object('flights/'+flightId);
  }
  updateFlight(localUpdatedFlight){
    var flightEntryInFirebase = this.getFlightById(localUpdatedFlight.$key);
    flightEntryInFirebase.update({title: localUpdatedFlight.title, artist: localUpdatedFlight.artist, description: localUpdatedFlight.description});
    }
  deleteFlight(localFlightToDelete){
    var flightEntryInFirebase = this.getFlightById(localFlightToDelete.$key);
    flightEntryInFirebase.remove();
  }
}
