import { Component} from '@angular/core';
import { Album } from '../album.model';
import { Router} from '@angular/router';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {
  constructor(private router: Router){}
  albums: Album[]=[
    new Album("Pulse", "Pink Floyd", "It's pink floyd", 1),
    new Album("Don't Tread on Me", "311", "another album", 2),
    new Album("40oz to freedom", "Sublime", "RIP lead singer of Sublime", 3)
  ]
  goToDetailPage(clickedAlbum: Album){
    this.router.navigate(['albums',clickedAlbum.id]);
  };


}
