import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeApplicationsComponent } from './mentee-applications.component';

describe('MenteeApplicationsComponent', () => {
  let component: MenteeApplicationsComponent;
  let fixture: ComponentFixture<MenteeApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenteeApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteeApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
