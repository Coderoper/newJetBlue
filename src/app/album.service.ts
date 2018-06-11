import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService {

  constructor() { }
  getAlbums(){
    return ALBUMS;
  }
  getAlbumById(albumId: number){
    for (var i=0; i <=ALBUMS.length -1; i++) {
      if(ALBUMS[i].id === albumId){
        return ALBUMS[i];
      }
    }
  }

}
