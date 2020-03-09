import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor() { }
  @Output() addIngredient = new EventEmitter<Ingredients>();
  @ViewChild('nameInput') namedInput: ElementRef;
  @ViewChild('amountInput') amountedInput: ElementRef;

  ngOnInit(): void {
  }

  onAddIngredients() {
    this.addIngredient.emit(new Ingredients(this.namedInput.nativeElement.value, this.amountedInput.nativeElement.value));
  }

}
