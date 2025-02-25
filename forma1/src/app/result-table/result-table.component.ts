import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  output,
} from '@angular/core';
import { Result } from '../results';
import { DatePipe, NgClass } from '@angular/common';
// for definitions of typesafe columns
type ColumnDef<T> = {
  key: keyof T; // union of all possible key from T
  label: string;
};

@Component({
  selector: 'app-result-table',
  imports: [DatePipe, NgClass],
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultTableComponent {
  columns: ColumnDef<Result>[] = [
    { key: 'grandPrix', label: 'Grand Prix' },
    { key: 'date', label: 'Date' },
    { key: 'winner', label: 'Winner' },
    { key: 'team', label: 'Team' },
    { key: 'laps', label: 'Laps' },
  ];
  results = input.required<Result[]>();

  // 2-way data binding with the signal of parent component
  selectedRow = model<number | undefined>(undefined);
}
