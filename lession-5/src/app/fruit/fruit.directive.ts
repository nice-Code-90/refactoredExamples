import { Directive, input } from '@angular/core';
import { Fruit } from './fruit.model';

@Directive({
  selector: '[appFruit]',
})
export class FruitDirective {
  fruit = input<Fruit>(undefined, { alias: 'appFruit' });

  constructor() {}
}
