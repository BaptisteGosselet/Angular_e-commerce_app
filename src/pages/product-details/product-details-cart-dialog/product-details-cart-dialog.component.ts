import { Component, inject, Signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-details-cart-dialog',
  imports: [],
  templateUrl: './product-details-cart-dialog.component.html',
  styleUrl: './product-details-cart-dialog.component.scss'
})
export class ProductDetailsCartDialogComponent {
  readonly dialogRef = inject(MatDialogRef);
  readonly data = inject(MAT_DIALOG_DATA);

  readonly product:Signal<Product> = this.data.product;

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
