import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  customerdata={};
  constructor(private service:CustomerserviceService) { }

  ngOnInit() {
  }
  onaddCustomerData(f:NgForm){
    this.service.setdetails(this.customerdata)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)
      
      
    )
    
  }

}
