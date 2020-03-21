import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http:HttpClient) { }
  geturl="http://localhost:4000"
  posturl="http://localhost:4000/data"
  updateurl="http://localhost:4000/"
  getdetails(customer){
    return this.http.get<any>(this.geturl,customer);
  }
  setdetails(customer){
    return this.http.post<any>(this.posturl,customer);

  }
}
