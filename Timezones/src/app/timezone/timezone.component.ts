import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timezone',
  imports: [DatePipe, FormsModule],
  templateUrl: './timezone.component.html',
  styleUrl: './timezone.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.current]': 'isCurrent()',
  },
})
export class TimezoneComponent {
  ngOnInit() {
    this.updateTime();
    this.tzName.set(this.timezone());
  }

  timezone = input('Europe/Budapest');

  isCurrent = input(false);

  timezoneChanged = output<string>();

  tzName = signal('');

  constructor() {
    effect(() => {
      console.log('TzName changed:', this.tzName());
    });
  }

  public time = signal<string>('');

  updateTime() {
    this.time.set(
      new Date().toLocaleString('hu-HU', { timeZone: this.timezone() })
    );
  }
}
