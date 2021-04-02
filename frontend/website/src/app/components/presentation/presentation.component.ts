import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PresentationService } from 'src/app/services';

import { Image } from './../../models';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.sass']
})
export class PresentationComponent implements OnInit {

  banners: Image[];

  constructor(

    private config: NgbCarouselConfig,
    private presentationService: PresentationService

  ) {

    this.banners = [];

  }

  ngOnInit(): void {

    this.banners = this.presentationService.all();
    this.config.interval = 1000;
    this.config.wrap = true;
    this.config.keyboard = false;
    this.config.pauseOnHover = false;
    

  }

}
