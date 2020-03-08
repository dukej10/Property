import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/category.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.css']
})
export class CategoryEditorComponent implements OnInit {

  constructor(private catService: CategoryService, private route: ActivatedRoute, private router: Router) { }
  /* ngModel */

  category: CategoryModel = {
    id: null,
    name: null,
    code: null,
    trequest: null
  };
 
  ngOnInit(){
    this.searchCategory();
    this.cFormGroup = this.formGroupEditor();
  }

  cFormGroup: FormGroup;

  formGroupEditor(): FormGroup{
    /* los campos que se solicitan */
   return new FormGroup({ 
     name : new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
     code: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]),
     trequest: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)])
   });
 }

 
searchCategory():void{
  let id = this.route.snapshot.params["id"];
  this.catService.getCategoryById(id).subscribe(item => {
    this.cFormGroup.setValue({name: item.name, code: item.code, trequest: item.trequest})
    }
  )
}

get code(){
  return this.cFormGroup.get('code');
}

get name(){
  return this.cFormGroup.get('name');
}

get trequest(){
  return this.cFormGroup.get('trequest');
}


 updateCategory(){
  if(this.cFormGroup.valid){
    this.catService.updateCategory(this.cFormGroup.value).subscribe(item => {
      alert("actualizado");
      this.router.navigate(["/admin/category/list"]);
    });
    
}else{
  alert("llene todo");
}
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
