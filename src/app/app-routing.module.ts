import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [
  { path: '', component: ProductCrudComponent },
  { path: 'cadastrar', component: CreateProductComponent },
  { path: 'pesquisar', component: ListProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
