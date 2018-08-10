import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../models/person';

@Injectable()
export class PremiumService {
  apiPath: string;

  constructor(private httpClient: HttpClient) {
  }
  getPremium(person) {    
    debugger; 
    this.apiPath = 'http://localhost:59591/api/Prediction/';
    return this.httpClient.post(this.apiPath, person).pipe(
      map(data => {
        return data;
      })
    )    
  };
}
