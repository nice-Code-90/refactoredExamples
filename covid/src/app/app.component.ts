import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CovidRecord } from './models/covid-record.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  covidData = signal<CovidRecord[]>([
    {
      testAmount: 1234,
      hospitalized: 2500,
      date: new Date('2022-03-07'),
    },
    {
      testAmount: 1876,
      hospitalized: 2180,
      date: new Date('2022-03-14'),
    },
    {
      testAmount: 2145,
      hospitalized: 1950,
      date: new Date('2022-03-21'),
    },
    {
      testAmount: 1568,
      hospitalized: 1720,
      date: new Date('2022-03-28'),
    },
    {
      testAmount: 980,
      hospitalized: 1450,
      date: new Date('2022-04-04'),
    },
    {
      testAmount: 1340,
      hospitalized: 1280,
      date: new Date('2022-04-11'),
    },
    {
      testAmount: 890,
      hospitalized: 1050,
      date: new Date('2022-04-18'),
    },
    {
      testAmount: 760,
      hospitalized: 860,
      date: new Date('2022-04-25'),
    },
  ]);
}
