import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReEnquriedComponent } from './re-enquried.component';

describe('ReEnquriedComponent', () => {
  let component: ReEnquriedComponent;
  let fixture: ComponentFixture<ReEnquriedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReEnquriedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReEnquriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
