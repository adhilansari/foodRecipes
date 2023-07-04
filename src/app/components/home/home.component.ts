import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { IFoodHits } from 'src/app/interfaces/food.interface';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  searchKey = new Subject<string>();
  foods!: IFoodHits[]
  constructor(private foodService: FoodServiceService) {
    this.searchKey.pipe(
      debounceTime(1000),
      distinctUntilChanged()).subscribe(values => {
        this.OnChanges(values)

      })
  }
  ngOnInit(): void {
    this.OnChanges('');
  }
  OnChanges(searchKey: string) {

    this.foodService.getSearchResult(searchKey).subscribe(val => {
      this.foods = val

    })


  }
  childEventHandler(event:any){
    this.foods=event

  }

}
