import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { results } from './results';
import { ResultTableComponent } from './result-table/result-table.component';
import { PodiumComponent } from './podium/podium.component';

@Component({
  selector: 'app-root',
  imports: [ResultTableComponent, PodiumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly results = results;
  title = 'Formula1 results';
  public selectedRow = signal<number | undefined>(undefined);
}
