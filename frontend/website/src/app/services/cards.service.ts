import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from './../models';

import cards from './../../data/cards.json';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(

    //private http: HttpClient

  ) { }

  public all(): Image[] {

    // return this.http.get<Card[]>('data/cards.json');
    //return this.http.get<Card[]>(cards);
    return cards;

  }

}
