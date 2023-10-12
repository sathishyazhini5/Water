import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwpsComponent } from './cwps.component';

describe('CwpsComponent', () => {
  let component: CwpsComponent;
  let fixture: ComponentFixture<CwpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
