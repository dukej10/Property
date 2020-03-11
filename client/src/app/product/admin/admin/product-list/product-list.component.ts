import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ProductModule } from 'src/app/product/product.module';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerService } from 'ngx-spinner';

declare const deleteMessageModalP: any;      /* Mensaje Modal elim */

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private pService: ProductService, private route: Router, private spinner: NgxSpinnerService) { }

  productList: ProductModule[] = [];
  
  showConfirmationsButtons: boolean = false;   /*  va a decir si mostrar opciones de confirmar o cancelar si se clickea Eliminar */

  idToShowButtons: string = '';        

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void{
    this.pService.getAllProducts().subscribe(items => {
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
  deleteProduct(ProductId: string): void{
    this.pService.deleteProduct(ProductId).subscribe(item => {
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

  }














  


