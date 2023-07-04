import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IFoodHits } from 'src/app/interfaces/food.interface';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent {
  food!:IFoodHits
  constructor(private activatedRoute:ActivatedRoute,private foodService:FoodServiceService) {
    this.activatedRoute.params.subscribe((param)=>{
      foodService.getFood(param['url']).subscribe(val=>{
        this.food=val
      })
    })
  }
}
