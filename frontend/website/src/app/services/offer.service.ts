import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../models';

import offers from './../../data/offers.json';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(

    private http: HttpClient

  ) { }

  public all(): any[] {

    return offers;

  }

}
