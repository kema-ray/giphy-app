import { Component, OnInit } from '@angular/core';
import { GiphyServicesService } from '../giphy-services.service';

@Component({
  selector: 'app-giphs',
  templateUrl: './giphs.component.html',
  styleUrls: ['./giphs.component.css']
})
export class GiphsComponent implements OnInit {
  trendingGifs!:any

  constructor(private giphyServicesService: GiphyServicesService) { }

  ngOnInit(): void {
    this.giphyServicesService.trendingGifs().subscribe(response =>{
      this.trendingGifs = response['data']
      console.log(this.trendingGifs)
    })
  }

}
