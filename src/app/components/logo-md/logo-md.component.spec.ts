import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoMdComponent } from './logo-md.component';

describe('LogoMdComponent', () => {
  let component: LogoMdComponent;
  let fixture: ComponentFixture<LogoMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoMdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
