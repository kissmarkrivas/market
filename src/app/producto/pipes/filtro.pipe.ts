import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product.interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(products: Product[], page: number=0,search:string = ''): Product[] {
    if(search.length === 0)
    return products.slice(page,page+3);

    const filteredProduct = products.filter(prod => prod.name.includes(search) );
    return filteredProduct.slice(page,page+3);
  }

}
