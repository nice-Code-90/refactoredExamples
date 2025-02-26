import { Directive, effect, ElementRef, inject, input } from '@angular/core';
import { Fruit } from './fruit.model';

@Directive({
  selector: '[appFruit]',
})
export class FruitDirective {
  fruit = input<Fruit>(undefined, { alias: 'appFruit' });
  private readonly element: ElementRef<HTMLElement> = inject(ElementRef);

  constructor() {
    effect(() => {
      const currentFruit = this.fruit();

      this.element.nativeElement.style.backgroundColor = currentFruit!.color;
      this.element.nativeElement.style.padding = '4px 8px';
      this.element.nativeElement.style.borderRadius = '4px';
      this.element.nativeElement.style.textAlign = 'center';
    });
  }
}
