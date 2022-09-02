import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductolistComponent } from './productolist/productolist.component';
import { FiltroPipe } from './pipes/filtro.pipe';



@NgModule({
  declarations: [
    ProductolistComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductolistComponent
  ]
})
export class ProductoModule { }
