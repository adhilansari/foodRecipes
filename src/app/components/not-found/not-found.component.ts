import { Component, EventEmitter, Output } from '@angular/core';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(private foodService:FoodServiceService){}
  @Output() data =  new EventEmitter();

  goBack() {

    this.foodService.getSearchResult('').subscribe(val => {
      this.data.emit(val)
    })

  }
}
