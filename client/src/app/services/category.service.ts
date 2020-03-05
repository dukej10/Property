import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';

const base_url: string = 'http://localhost:3000/api/' 

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {

  }

  getAllCategories():Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(`${base_url}categories`);

  }

  getCategoryById(CategoryId: string): Observable<CategoryModel>{
    return this.http.get<CategoryModel>(`${base_url}categories/${CategoryId}`);
  }

  saveNewCategory(Category: CategoryModel): Observable<CategoryModel>{
    return this.http.post<CategoryModel>(`${base_url}categories`, Category, {
      headers: new HttpHeaders({
        "content-type": "aplication/json"
      })
    });
  }

  updateCategory(Category: CategoryModel): Observable<CategoryModel>{
    return this.http.put<CategoryModel>(`${base_url}categories`, Category, {
      headers: new HttpHeaders({
        "content-type": "aplication/json"
      })
    });
  }

  deleteCategory(CategoryId: string): Observable<CategoryModel>{
    return this.http.delete<CategoryModel>(`${base_url}categories/${CategoryId}`)
    };
  }


