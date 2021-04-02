import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CardsService } from 'src/app/services/cards.service';
import { Image } from './../../models/image';

@Component({
  selector: 'app-cards-presentation',
  templateUrl: './cards-presentation.component.html',
  styleUrls: ['./cards-presentation.component.sass']
})
export class CardsPresentationComponent implements OnInit {

  cardsPicArray: Image[];
  errorMessage: string;

  constructor(

    private config: NgbCarouselConfig,
    private cardsService: CardsService

  ) {

    this.cardsPicArray = [];
    this.errorMessage = "";

  }

  ngOnInit(): void {
    
    this.config.interval = 3000;
    this.config.keyboard = false;
    this.config.pauseOnFocus = false;
    this.config.pauseOnHover = false;
    this.config.wrap = true;

    // this.cardsService
    //   .all()
    //   .subscribe(
    //     response => this.cardsPicArray = response,
    //     errorResponse => this.errorMessage = errorResponse.error
    //   );

    this.cardsPicArray = this.cardsService.all();

  }

}
