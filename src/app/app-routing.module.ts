import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'success', component: ConfirmationComponent},
  {path: ':product', component: ProductItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
