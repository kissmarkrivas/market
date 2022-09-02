import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Product } from '../interfaces/product.interfaces';
@Component({
  selector: 'app-productolist',
  templateUrl: './productolist.component.html',
  styleUrls: ['./productolist.component.css']
})
export class ProductolistComponent implements OnInit {

  public products: Product[] = [];
  public page:number=0;
  public search:string='';


  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getAllProduct()
      .subscribe((resp: any) => {this.products = resp})
  }

  nextPage(){
    this.page += 3;
  }
  prevPage(){
    if(this.page>0)
    this.page -= 3;
  }

  onSearchPokemon(search:string){
    this.page=0;
    this.search = search;
  }
}
