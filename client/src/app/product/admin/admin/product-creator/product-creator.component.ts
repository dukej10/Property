import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: ['./product-creator.component.css']
})
export class ProductCreatorComponent implements OnInit {

  constructor(private pService: ProductService, private route: Router) { }

  product: PropertyModel ={
    id: null,
    code: null,
    name: null,
    available: null,
    rooms: null,
    bathrooms: null,
    area: null,
    category: null,
    price: null,
    description: null,
    image: null,
    image1: null,
    address: null
  }

  ngOnInit(): void {
  }

  saveNewProduct(): void{
    this.pService.saveNewProduct(this.product).subscribe(item =>{
      alert("se guardo product");
      this.route.navigate(["/admin/product/list"]);
    });

  }

}
