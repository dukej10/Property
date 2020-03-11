import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../product.module';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { PropertyModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private pdtService: ProductService, private route: ActivatedRoute) { }

  product: PropertyModel ={
    id: null,
    code: null,
    name: null,
    available: false,
    rooms: null,
    bathrooms: null,
    area: null,
    category: null,
    price: null,
    description: null,
    image: null,
    image1: null,
    address: null,
    tipo: null
  }

  ngOnInit(): void {
    this.getProductInformation();
  }

  getProductInformation():void{
    let id = this.route.snapshot.params["id"];
    this.pdtService.getProductById(id).subscribe(item => {
      this.product = item;
    })
  }

}
