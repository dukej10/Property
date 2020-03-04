import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { Observable} from 'rxjs';
import { ProductModule } from '../product/product.module';

const base_url: string = 'http://localhost:3000/api/' 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

    getAllProducts():Observable<ProductModule>{
        return this.http.get<ProductModel[]>('${base_url}properties');
    }


  }
}
