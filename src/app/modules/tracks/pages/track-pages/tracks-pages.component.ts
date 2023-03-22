import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json';
@Component({
  selector: 'app-tracks-pages',
  templateUrl: './tracks-pages.component.html',
  styleUrls: ['./tracks-pages.component.css']
})
export class TracksPagesComponent implements OnInit {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  
  listObservers$: Array<Subscription> = [];
  constructor(private tracksService: TrackService){

  }

    ngOnInit(): void{
     this.tracksService.getAllTracks$()
     .subscribe((response: TrackModel[])=> {
      this.tracksTrending = response;
     }) 
    

    this.tracksService.getAllRandom$()
    .subscribe((response: TrackModel[])=> {
     this.tracksRandom = response;
    }) 
    
  }
    ngOnDestroy(): void{
    }
}
