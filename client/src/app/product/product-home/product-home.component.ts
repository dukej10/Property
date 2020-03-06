import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  constructor(private pdtService: ProductService) {   }

  productList: PropertyModel[] = [];

  ngOnInit(){
    this.getAllProducts(); 
  }

  getAllProducts():void{
    this.pdtService.getAllProducts().subscribe(items => {
      this.productList = items;
    });
  }

}
