import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corosil } from './corosil';

describe('Corosil', () => {
  let component: Corosil;
  let fixture: ComponentFixture<Corosil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corosil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corosil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
