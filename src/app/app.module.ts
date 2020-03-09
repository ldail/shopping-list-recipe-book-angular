import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { RecipeItemComponent } from './header/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipe-list/recipe-item/recipe-detail/recipe-detail.component';
import { ShoppingListEditComponent } from './header/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './header/recipe-list/recipe-list.component';
import { RecipesComponent } from './header/recipes/recipes.component';
import { ShoppingEditComponent } from './header/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipesComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
