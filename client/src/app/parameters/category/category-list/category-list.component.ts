import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private catService: CategoryService) { }

  categoryList: CategoryModel[] = [];

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void{
    this.catService.getAllCategories().subscribe(items => {
      this.categoryList = items;
    })
  }

}
