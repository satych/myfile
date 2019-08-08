import { Component, OnInit } from '@angular/core';
import { Productlistservice } from '../productlistservice';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    urllist;
  constructor(public src:Productlistservice) {
    this.urllist = this.src.getprodutctlist()
    console.log(this.urllist);
   } 
 
  ngOnInit() {
    
  }

}
