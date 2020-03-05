import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PropertyModel } from '../models/product.model';
import { Observable} from 'rxjs';


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

}
