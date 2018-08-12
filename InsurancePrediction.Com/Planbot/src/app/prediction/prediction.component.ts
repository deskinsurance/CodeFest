import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../models/person';
import { PremiumService } from '../services/premium.service';
//import { debug } from 'util';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent {

  title = 'Welcome to Premium Calculator';
  /*
  person: any;
  finalPremiumScoredLabels: any;

  constructor(private premiumService: PremiumService) {
    this.person = new Person();
  }

  getPremium() {
    var premimumData = this.premiumService.getPremium(this.person).subscribe((res: any) => {
      var myData = JSON.parse(res);
      this.finalPremiumScoredLabels = myData.Results.output1[0]["Scored Labels"];
    });
  }
*/
}
