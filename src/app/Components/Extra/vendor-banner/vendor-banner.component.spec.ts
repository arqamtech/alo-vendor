import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorBannerComponent } from './vendor-banner.component';

describe('VendorBannerComponent', () => {
  let component: VendorBannerComponent;
  let fixture: ComponentFixture<VendorBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorBannerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
