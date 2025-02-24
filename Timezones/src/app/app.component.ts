import { Component, signal } from '@angular/core';
import { TimezoneComponent } from './timezone/timezone.component';

@Component({
  selector: 'app-root',
  imports: [TimezoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  selectedTimezone = signal('Europe/Budapest');

  timezoneList = signal([
    'Europe/Budapest',
    'America/New_York',
    'Atlantic/Reykjavik',
    'Australia/Sydney',
    'Iceland',
    'Japan',
  ]);

  displayTimezones = signal(['Europe/Budapest', 'America/New_York']);

  handleTimezoneChange(timezone: string) {
    this.selectedTimezone.set(timezone);
  }

  addNewTimezone() {
    this.displayTimezones.update((timezones) => {
      const nextTimezone = this.timezoneList()[timezones.length];
      if (nextTimezone) {
        return [...timezones, nextTimezone];
      }
      return timezones;
    });
  }
}
