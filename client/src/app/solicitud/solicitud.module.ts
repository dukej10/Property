import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { EditorComponent } from './editor/editor.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [EditorComponent, ListComponent],
  imports: [
    CommonModule,
    SolicitudRoutingModule
  ]
})
export class SolicitudModule { }
