import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-podium',
  imports: [],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PodiumComponent {
  podium = input.required<string[]>();

  hideEvent = output();
}
