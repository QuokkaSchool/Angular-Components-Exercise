import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  protected counter: number = 0;

  protected increment(): void {
    this.counter++;
  }

  protected decrement(): void {
    this.counter++;
  }
}
