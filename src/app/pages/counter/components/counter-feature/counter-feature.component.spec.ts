import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterFeatureComponent } from './counter-feature.component';

describe('CounterFormComponent', () => {
  let component: CounterFeatureComponent;
  let fixture: ComponentFixture<CounterFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
