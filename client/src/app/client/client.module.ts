import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreatorComponent } from './client-creator/client-creator.component';
import { ClientEditorComponent } from './client-editor/client-editor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClientListComponent, ClientCreatorComponent, ClientEditorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ClientListComponent,
    ClientCreatorComponent,
    ClientEditorComponent
  ]
})
export class ClientModule { }
