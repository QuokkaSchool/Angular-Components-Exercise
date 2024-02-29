import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  protected onValueChange(event: number): void {
    console.log(event);
  }

  protected onIncrementClick(): void {
    console.log('Zwiększono wartość.');
  }

  protected onDecrementClick(): void {
    console.log('Zmniejszono wartość.');
  }
}
