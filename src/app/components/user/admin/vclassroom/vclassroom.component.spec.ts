import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VclassroomComponent } from './vclassroom.component';

describe('VclassroomComponent', () => {
  let component: VclassroomComponent;
  let fixture: ComponentFixture<VclassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VclassroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VclassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
