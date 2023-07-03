import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodDetailComponent } from './components/food-detail/food-detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'food/:url',component:FoodDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
