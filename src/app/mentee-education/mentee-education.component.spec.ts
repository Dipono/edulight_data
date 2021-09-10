import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeEducationComponent } from './mentee-education.component';

describe('MenteeEducationComponent', () => {
  let component: MenteeEducationComponent;
  let fixture: ComponentFixture<MenteeEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenteeEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteeEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
