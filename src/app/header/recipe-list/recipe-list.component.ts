import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe','a test description','https://images-na.ssl-images-amazon.com/images/I/51ftsbkynwL._SX403_BO1,204,203,200_.jpg'),
    new Recipe('A test recipe','a test description','https://images-na.ssl-images-amazon.com/images/I/51ftsbkynwL._SX403_BO1,204,203,200_.jpg')
  ];
}
