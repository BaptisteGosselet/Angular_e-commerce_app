import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsStore } from './product-details.store';
import { ProductDetailsCartDialogComponent } from './product-details-cart-dialog/product-details-cart-dialog.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [ProductDetailsStore]
})
export class ProductDetailsComponent {
  #productDetailsStore: ProductDetailsStore = inject(ProductDetailsStore);
  #dialog = inject(MatDialog);
  #router = inject(Router);

  product = this.#productDetailsStore.product();

  constructor(private route: ActivatedRoute) {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId !== null) {
      const numProductId = +productId | 0;
      this.#productDetailsStore.init(numProductId);
    }
  }

  addToCart() {
    this.#productDetailsStore.addToCart();
    this.#openDialog();
  }

  #openDialog() {
    const dialogRef = this.#dialog.open(ProductDetailsCartDialogComponent, {
        data: { product: this.product }
      });

    dialogRef.afterClosed().subscribe((goToCart:boolean) => {
      if(goToCart){
        this.#router.navigate(['/cart']);
      }
      }
    );
  }

}
