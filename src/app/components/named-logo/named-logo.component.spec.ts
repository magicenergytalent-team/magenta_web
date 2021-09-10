import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedLogoComponent } from './named-logo.component';

describe('NamedLogoComponent', () => {
  let component: NamedLogoComponent;
  let fixture: ComponentFixture<NamedLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
