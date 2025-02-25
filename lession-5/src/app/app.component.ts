import { Component, signal } from '@angular/core';
import { Fruit } from './fruit/fruit.model';
import { DisplayFruitPipe } from './fruit/display-fruit.pipe';
import { MyUppercasePipe } from './my-uppercase.pipe';

@Component({
  selector: 'app-root',
  imports: [DisplayFruitPipe, MyUppercasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  text = signal('Angular course');

  hatedFruits = signal<string[]>(['orange', 'peach']);

  fruits = signal<Fruit[]>([
    { name: 'apple', score: 4 },
    { name: 'banana', score: 10 },
    { name: 'orange', score: 0 },
    { name: 'plum', score: 3 },
    { name: 'grapes', score: 7 },
    { name: 'peach', score: 6 },
  ]);
}
