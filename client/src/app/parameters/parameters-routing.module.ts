import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryCreatorComponent } from './category/category-creator/category-creator.component';
import { CategoryEditorComponent } from './category/category-editor/category-editor.component';
import { CategoryListComponent } from './category/category-list/category-list.component';


const routes: Routes = [
  {
    path: 'admin/category/creator',
    component: CategoryCreatorComponent

  },
  {
    path: 'admin/category/editor',
    component: CategoryEditorComponent

  },
  {
    path: 'admin/category/list',
    component: CategoryListComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
