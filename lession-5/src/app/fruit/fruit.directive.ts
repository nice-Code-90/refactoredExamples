import { Directive, effect, input } from '@angular/core';
import { Fruit } from './fruit.model';

@Directive({
  selector: '[appFruit]',
})
export class FruitDirective {
  fruit = input<Fruit>(undefined, { alias: 'appFruit' });

  constructor() {
    effect(() => {
      const currentFruit = this.fruit();
      console.log('Fruit:', currentFruit);
    });
  }
}
