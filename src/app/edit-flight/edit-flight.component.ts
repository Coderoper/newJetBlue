import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css'],
  providers: [FlightService]
})

export class EditFlightComponent implements OnInit {
  @Input() selectedFlight;

  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }
  beginUpdatingFlight(flightToUpdate){
    this.flightService.updateFlight(flightToUpdate);
  }
  beginDeletingFlight(flightToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){

    }
  }

}
