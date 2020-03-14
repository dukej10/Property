import { Component, OnInit } from '@angular/core';
import { SolicitModel } from 'src/app/models/solicitd.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private sP: SolicitudService, private spinner: NgxSpinnerService) { }


  productList: SolicitModel[] = [];
  condicion: string = null;
  cList: SolicitModel[] = []

  showConfirmationsButtons: boolean = false;   /*  va a decir si mostrar opciones de confirmar o cancelar si se clickea Eliminar */

  idToShowButtons: string = '';        

  ngOnInit(): void {
    this.getAllSolicitud();
  }

  getAllSolicitud(): void{
    this.sP.getAllSolcitud().subscribe(items => {
      this.productList = items;
    })
  }

  /* Se usa si se da click en Cancelar para mostrar los botones de confirmar y cancelar */
  ChangeConfirmationButtons(id){
    this.idToShowButtons = id;
    this.showConfirmationsButtons = !this.showConfirmationsButtons;
  }
  /* para ngxPagination */
  cp: number= 1;
  total: number= 0;

  /* ---------*/  

  /* Elimina la categoria al dar click en confirmación */
  deleteSolicitud(ProductId: string): void{
    this.sP.deleteSolcitud(ProductId).subscribe(item => {
      /* deleteMessageModalP("Ha sido eliminado satisfactoriamente."); */
      /* this.route.navigate(["/admin/product/list"]); */
      location.reload();
    })
  }

    /*NgxSpinner*/
  
  onPageChange(event):void{
    this.spinner.show();
    this.cp = event;
  
    setTimeout(() => {
      /** spinner ends after 1,5 seconds */
      this.spinner.hide();
    }, 1000);
    }


  condition(condicion){
    this.cList = [];
    if(condicion == "enviado"){
      for(let prop of this.productList){
        if(prop.estado == condicion){
          this.cList.push(prop);
        }
      }
    }
    if(condicion == "Medellin"){
      for(let prop of this.productList){
        if(prop.estado == condicion){
          this.cList.push(prop);
        }
      }
    }

    if(condicion == "Villamaria"){
      for(let prop of this.productList){
        if(prop.estado == condicion){
          this.cList.push(prop);
        }
      }
    }


    

  }


}
