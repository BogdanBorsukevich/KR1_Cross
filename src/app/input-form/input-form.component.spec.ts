import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputFormComponent } from './input-form.component';

describe('InputFormComponent', () => {
  let component: InputFormComponent;
  let fixture: ComponentFixture<InputFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InputFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
