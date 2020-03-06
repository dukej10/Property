import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

declare const saveMessageModal: any;      /* Mensaje Modal elim */

@Component({
  selector: 'app-category-creator',
  templateUrl: './category-creator.component.html',
  styleUrls: ['./category-creator.component.css']
})
export class CategoryCreatorComponent implements OnInit {

  constructor(private catService: CategoryService, private router: Router) { }

  category: CategoryModel = {
    code: null,
    name: null,
    trequest: null, 
    id: null  
  }

  ngOnInit(): void {
  }

  /* Guardar la nueva categoria creada */
  saveNewCategory():void{
    this.catService.saveNewCategory(this.category).subscribe(item => {
      console.log("oe");
      /* saveMessageModal("Ha sido guardada satisfactoriamente."); */
      alert("oe");
      console.log("oe");
      this.router.navigate(["/admin/category/list"]);
    })
  }


}
