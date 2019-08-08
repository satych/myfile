import { Component, OnInit } from '@angular/core';import { Productlistservice } from '../productlistservice';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  prod;
  totalproduct;
  data;
  reult; 

  constructor(public act:ActivatedRoute,public rou:Router,public ser:Productlistservice) {
       this.act.params.subscribe(res=>{
             this.prod = res;
             console.log(this.prod);
       })
   }

  ngOnInit() {
         this.totalproduct = this.ser.getprodutctlist();
         let data = this.totalproduct.findIndex((item,index)=>{
             this.reult = this.totalproduct[index];     
         })
  }

}
