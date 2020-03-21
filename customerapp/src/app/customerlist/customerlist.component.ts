import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  customerlist={};
  constructor(private route:Route,private service:CustomerserviceService) { 
    
  }


  ngOnInit(){
    this.service.getdetails(this.customerlist)
    .subscribe(
      res=>this.customerlist=res,   
      err=>console.log(err)
      
    )
  }
  

  
  

}
