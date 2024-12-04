import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ArticuloComponent} from "./components/articulo/articulo.component";
import {ListaArticulosComponent} from "./components/lista-articulos/lista-articulos.component";
import {DetalleArticuloComponent} from "./components/detalle-articulo/detalle-articulo.component";

const routes: Routes = [
  {path: '', component: ListaArticulosComponent },
  {path: 'articulo', component: DetalleArticuloComponent },
  {path: 'product-list', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'success', component: ConfirmationComponent},
  {path: ':product', component: ProductItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
