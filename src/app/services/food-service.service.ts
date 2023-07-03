import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IFoodHits, IFoodObject } from '../interfaces/food.interface';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(private http:HttpClient) { }
  APP_KEY:string='3af2e53ffca4b87028ca91f32d90fd3b'
  APP_ID:string='dcfc279d'

  getSearchResult(searchKey:string):Observable<IFoodHits[]>{
    return this.http.get<IFoodObject>(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchKey}s&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`).pipe(map(val=>val.hits))
  }
  getFood(link:string){
    return this.http.get<IFoodHits>(link)
  }

}
