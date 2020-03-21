import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import {CustomerserviceService} from './customerservice.service'
import { AppComponent } from './app.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
 const routes:Routes=[
   {path:'',redirectTo:'customerlist',pathMatch:'full'},
   {path:'customerlist',component:CustomerlistComponent},
   {path:'addcustomer',component:AddcustomerComponent},
   {path:'editcustomer',component:EditcustomerComponent}
 ]
@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    AddcustomerComponent,
    EditcustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [CustomerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
