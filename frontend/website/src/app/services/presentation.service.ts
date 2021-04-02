import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Image } from './../models';

import presentation from './../../data/presentation.json';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {

  constructor(

    //private http: HttpClient

  ) { }

  public all(): any[] {

    return presentation;

  }

}
