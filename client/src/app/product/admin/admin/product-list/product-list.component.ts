import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ProductModule } from 'src/app/product/product.module';

declare const deleteMessageModalP: any;      /* Mensaje Modal elim */

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private pService: ProductService, private route: Router) { }

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

  /* Elimina la categoria al dar click en confirmación */
  deleteProduct(ProductId: string): void{
    this.pService.deleteProduct(ProductId).subscribe(item => {
      /* deleteMessageModalP("Ha sido eliminado satisfactoriamente."); */
      /* this.route.navigate(["/admin/product/list"]); */
      location.reload();
    })
  }














  

}
