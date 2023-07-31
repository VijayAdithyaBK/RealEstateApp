import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateListingsComponent } from './real-estate-listings.component';

describe('RealEstateListingsComponent', () => {
  let component: RealEstateListingsComponent;
  let fixture: ComponentFixture<RealEstateListingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealEstateListingsComponent]
    });
    fixture = TestBed.createComponent(RealEstateListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
