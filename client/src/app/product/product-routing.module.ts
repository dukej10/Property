import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { ProductModule } from './product.module';

const routes: Routes = [
  /* Rutas de producto */

  {
    path: 'product/list',
    component: ProductListComponent

  },
  {
    path: 'product/editor',
    component: ProductEditorComponent

  },
  {
    path: 'product',
    pathMatch: 'full',
    redirectTo: '/product/list'
  },
  {
    path: 'product/creator',
    component: ProductCreatorComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ProductModule
],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
