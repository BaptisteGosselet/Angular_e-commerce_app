import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsCartDialogComponent } from './product-details-cart-dialog.component';

describe('ProductDetailsCartDialogComponent', () => {
  let component: ProductDetailsCartDialogComponent;
  let fixture: ComponentFixture<ProductDetailsCartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsCartDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsCartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
