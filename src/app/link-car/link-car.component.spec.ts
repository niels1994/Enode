import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCarComponent } from './link-car.component';

describe('LinkCarComponent', () => {
  let component: LinkCarComponent;
  let fixture: ComponentFixture<LinkCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
