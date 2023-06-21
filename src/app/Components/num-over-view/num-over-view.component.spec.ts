import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumOverViewComponent } from './num-over-view.component';

describe('NumOverViewComponent', () => {
  let component: NumOverViewComponent;
  let fixture: ComponentFixture<NumOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumOverViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
