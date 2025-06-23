import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutcard } from './aboutcard';

describe('Aboutcard', () => {
  let component: Aboutcard;
  let fixture: ComponentFixture<Aboutcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
