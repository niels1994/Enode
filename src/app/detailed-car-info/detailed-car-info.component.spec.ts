import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCarInfoComponent } from './detailed-car-info.component';

describe('DetailedCarInfoComponent', () => {
  let component: DetailedCarInfoComponent;
  let fixture: ComponentFixture<DetailedCarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedCarInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedCarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
