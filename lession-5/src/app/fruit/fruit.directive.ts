import {
  Directive,
  effect,
  ElementRef,
  HostListener,
  inject,
  input,
} from '@angular/core';
import { Fruit } from './fruit.model';

@Directive({
  selector: '[appFruit]',
})
export class FruitDirective {
  fruit = input<Fruit>(undefined, { alias: 'appFruit' });

  private readonly element: ElementRef<HTMLElement> = inject(ElementRef);

  constructor() {
    effect(() => {
      this.formatFruit();
    });
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'blue';
    this.element.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.formatFruit();
  }

  formatFruit() {
    this.element.nativeElement.style.backgroundColor =
      this.fruit()?.color ?? 'transparent';

    this.element.nativeElement.style.padding = '4px 8px';

    this.element.nativeElement.style.borderRadius = '4px';

    this.element.nativeElement.style.textAlign = 'center';
    this.element.nativeElement.style.color = 'black';
  }
}
