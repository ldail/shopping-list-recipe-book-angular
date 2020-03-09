import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomatoes', 2)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(name: string, amount: number) {
    this.ingredients.push(new Ingredients(name, amount));
  }

}
