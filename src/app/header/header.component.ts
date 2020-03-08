import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navAtRecipes = true;
  @Output() swapMain = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onSwapMain(swapTo: string) {
    if (swapTo === 'recipes' && !this.navAtRecipes) {
      this.navAtRecipes = true;
      this.swapMain.emit(this.navAtRecipes);

    } else if (swapTo === 'shopping' && this.navAtRecipes) {
      this.navAtRecipes = false;
      this.swapMain.emit(this.navAtRecipes);
    }
  }

}
