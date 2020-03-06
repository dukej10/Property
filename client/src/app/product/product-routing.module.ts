import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './admin/admin/product-list/product-list.component';
import { ProductEditorComponent } from './admin/admin/product-editor/product-editor.component';
import { ProductCreatorComponent } from './admin/admin/product-creator/product-creator.component';
import { ProductModule } from './product.module';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  /* Rutas de producto */

  {
    path: 'admin/product/list',
    component: ProductListComponent

  },
  {
    path: 'admin/product/editor',
    component: ProductEditorComponent

  },
  /* {
    path: 'product',
    pathMatch: 'full',
    redirectTo: '/product/list'
  }, */
  {
    path: 'admin/product/creator',
    component: ProductCreatorComponent

  },
  {
    path: 'product/home',
    component: ProductHomeComponent

  },
  {
    path: 'product/detalles/:id',
    component: ProductDetailsComponent

  },
  {
    path: 'admin/product/list',
    component: ProductListComponent

  },
  {
    path: 'admin/product/editor/:id',
    component: ProductEditorComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ProductModule,
    FormsModule
],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
