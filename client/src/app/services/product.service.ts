import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PropertyModel } from '../models/product.model';
import { Observable} from 'rxjs';
import { ProductModule } from '../product/product.module';


const base_url: string = 'http://localhost:3000/api/' 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }
  getAllProducts():Observable<PropertyModel[]>{
    return this.http.get<PropertyModel[]>(`${base_url}properties`);

  }

  getProductById(productId: string): Observable<PropertyModel>{
    return this.http.get<PropertyModel>(`${base_url}properties/${productId}`);
  }

  saveNewProduct(product: PropertyModel): Observable<PropertyModel>{
    return this.http.post<PropertyModel>(`${base_url}properties`, product, {
      headers: new HttpHeaders({
        "content-type": "aplication/json"
      })
    });
  }

  updateProduct(product: PropertyModel): Observable<PropertyModel>{
    return this.http.put<PropertyModel>(`${base_url}properties`, product, {
      headers: new HttpHeaders({
        "content-type": "aplication/json"
      })
    });
  }

  deleteProduct(productId: string): Observable<PropertyModel>{
    return this.http.delete<PropertyModel>(`${base_url}properties/${productId}`)
    };
  }


