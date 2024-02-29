import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CounterFeatureComponent } from './components/counter-feature/counter-feature.component';

@NgModule({
  declarations: [
    CounterComponent,
    CounterFeatureComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    ButtonModule,
    FormsModule,
    InputTextModule
  ]
})
export class CounterModule { }
