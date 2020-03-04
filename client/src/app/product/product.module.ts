import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [ProductListComponent, ProductCreatorComponent, ProductEditorComponent, ProductHomeComponent, ProductDetailsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ProductListComponent,
    ProductCreatorComponent,
    ProductCreatorComponent
  ]  
})
export class ProductModule { }
