import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbuyComponent } from './cartbuy.component';

describe('CartbuyComponent', () => {
  let component: CartbuyComponent;
  let fixture: ComponentFixture<CartbuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartbuyComponent]
    });
    fixture = TestBed.createComponent(CartbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
