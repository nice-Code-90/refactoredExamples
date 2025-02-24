import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  EventEmitter,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  output,
  signal,
  SimpleChanges,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [CommonModule, FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  aim = input(10);
  counter = input.required<{ name: string; id: number }>();

  // kívülről adunk vissza értéket
  countChange = output<number>();
  count = signal(0);
  btnRef = viewChild<ElementRef>('btn'); //btnRef = viewChild<ElementRef<HTMLButtonElement>>('btn');

  changeDetectionCounter = signal(0);
  private logSignal = signal('change detection test');

  constructor() {
    console.log('constructor');
    // Effekt a logSignal változására
    effect(() => {
      this.logSignal(); // Csak a függőség létrehozásához
      this.changeDetectionCounter.update((count) => count + 1);
      //console.log('Change detection count:', this.changeDetectionCounter());
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', changes);
  }
  ngOnInit(): void {
    console.log('on init');
  }

  ngAfterViewInit(): void {
    //this.btnRef()!.nativeElement.textContent = 'Set from TS';
    console.log('after view init');
  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }

  incrementCounter() {
    this.count.update((count) => count + 1);
    this.changeDetectionCounter.update((count) => count + 1);

    //ennek a változónak az értékét a szőlő komponensben $event változóból érjük el
    this.countChange.emit(this.count());
  }

  get log() {
    return this.logSignal();
  }

  get isComplete() {
    return this.count() >= this.aim();
  }
}
