import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services';

import { Image } from './../../models/image';

@Component({
  selector: 'app-offer-presentation',
  templateUrl: './offer-presentation.component.html',
  styleUrls: ['./offer-presentation.component.sass']
})
export class OfferPresentationComponent implements OnInit {

  public offers: Image[];

  constructor(
    private offersService: OfferService
  ) {
    this.offers = [];
  }

  ngOnInit(): void {
    this.offers = this.offersService.all();
  }

}
