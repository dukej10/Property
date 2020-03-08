import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.css']
})
export class CategoryEditorComponent implements OnInit {

  constructor(private catService: CategoryService, private route: ActivatedRoute, private router: Router) { }
  /* ngModel
  category: CategoryModel = {
    id: null,
    name: null,
    code: null,
    trequest: null
  };
 */
  ngOnInit(){
    /* this.searchCategory(); */
  }

  formGroupEditor(): FormGroup{
    /* los campos que se solicitan */
   return new FormGroup({ 
     name : new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
     code: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(5)]),
     trequest: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)])
   });
 }


 /* -----ngModel---- */
  /* searchCategory():void{
    let id = this.route.snapshot.params["id"];
    this.catService.getCategoryById(id).subscribe(item => {
      this.category = item;
    })
  }

  updateCategory(){
    this.catService.updateCategory(this.category).subscribe(item => {
      alert("actualizado");
      this.router.navigate(["/admin/category/list"]);
    });
  } */

}
