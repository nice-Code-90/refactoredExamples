import { Component, inject, signal } from '@angular/core';
import { Fruit } from './fruit/fruit.model';
import { DisplayFruitPipe } from './fruit/display-fruit.pipe';
import { MyUppercasePipe } from './my-uppercase.pipe';
import { FruitDirective } from './fruit/fruit.directive';

@Component({
  selector: 'app-root',
  imports: [DisplayFruitPipe, MyUppercasePipe, FruitDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [DisplayFruitPipe],
})
export class AppComponent {
  text = signal('Angular course');

  hatedFruits = signal<string[]>(['orange', 'peach']);

  fruits = signal<Fruit[]>([
    { name: 'apple', score: 4, color: 'red' },
    { name: 'banana', score: 10, color: 'yellow' },
    { name: 'orange', score: 0, color: 'orange' },
    { name: 'plum', score: 3, color: 'plum' },
    { name: 'grapes', score: 7, color: 'green' },
    { name: 'peach', score: 6, color: 'peachpuff' },
  ]);

  constructor() {
    this.pipeTest();
  }
  //service belongs to the component. it has became cacheable
  displayFruitPipe = inject(DisplayFruitPipe);

  pipeTest() {
    console.log(this.displayFruitPipe.transform(this.fruits()[1]));
  }
}
