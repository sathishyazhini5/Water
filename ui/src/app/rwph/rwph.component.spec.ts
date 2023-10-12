import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwphComponent } from './rwph.component';

describe('RwphComponent', () => {
  let component: RwphComponent;
  let fixture: ComponentFixture<RwphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RwphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RwphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
