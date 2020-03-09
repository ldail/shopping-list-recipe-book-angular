import { Directive, TemplateRef, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') clicked = false;

  @HostListener('click') toggleClass() {
    this.clicked = !this.clicked;
  }
  
}
