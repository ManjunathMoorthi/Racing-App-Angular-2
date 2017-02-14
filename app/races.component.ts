import { Component } from '@angular/core';
import { race } from './race';
import { RACES } from './mocks';

@Component({
  selector: 'my-races',
  templateUrl: 'app/races.component.html',
  styleUrls: ['app/races.component.css']
})
export class RacesComponent {
  heading = "Ultra Racing Schedule"
  cash = 10000;
  races: race[];
  ngOnInit(){
    this.races= RACES;
  }

  totalCost() {
    let sum = 0;
    for (let race of this.races) {
      if (race.isRacing===true) 
      sum += race.entryFee;
    }
    return sum;
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

}
