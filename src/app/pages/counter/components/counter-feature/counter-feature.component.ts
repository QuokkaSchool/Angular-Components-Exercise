import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-feature',
  templateUrl: './counter-feature.component.html',
  styleUrls: ['./counter-feature.component.scss']
})
export class CounterFeatureComponent {
  @Input() value!: number;
  @Input() step: number = 1;

  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() incrementClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() decrementClick: EventEmitter<void> = new EventEmitter<void>();

  protected increment(): void {
    this.value = this.value + this.step;
    this.valueChange.emit(this.value);
    this.incrementClick.emit();
  }

  protected decrement(): void {
    this.value = this.value - this.step;
    this.valueChange.emit(this.value);
    this.decrementClick.emit();
  }
}
