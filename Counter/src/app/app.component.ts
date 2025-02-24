import { Component, input, signal } from '@angular/core';

import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = signal('First Angular application');
  logoSrc = signal(
    'https://cdn.iconscout.com/icon/free/png-256/free-angular-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226066.png?f=webp&w=256'
  );

  counters = signal<{ name: string; id: number; aim: number }[]>([]);

  aim = signal(5);

  isCompleted = signal(false);
  counterCount = signal(0);

  countChanged(count: number) {
    if (count === this.aim()) {
      this.isCompleted.set(true);
      alert('Goal reached');
    }
    if (count === 3) {
      this.aim.set(10);
      //this.counter.set({ ...this.counter(), name: 'Teregetés' });
    }
  }

  counterCountChanged() {
    const diff = this.counterCount() - this.counters().length;

    if (diff > 0) {
      const newCounters = new Array(diff).fill(undefined).map((_, i) => ({
        name: '',
        id: i + this.counters().length,
        aim: 10,
      }));

      this.counters.set([...this.counters(), ...newCounters]);
    } else if (diff < 0) {
      this.counters().splice(this.counterCount());
    }
  }
}
