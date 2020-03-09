import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Recipe } from 'src/app/header/recipes/recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeData: Recipe;
  dropdownShown = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipeDetails: Recipe) {
    this.recipeData = recipeDetails;
  }


}
