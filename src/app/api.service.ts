import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
    addemp=(data:any)=>{
      return this.http.post("http://localhost:8080/addEmp",data)
  }
  viewemp=()=>{
    return this.http.get("http://localhost:8080/viewEmp")
  }
  searchemp=(data:any)=>{
    return this.http.post("http://localhost:8080/searchEmp",data)
  }
  updateemp=(data:any)=>{
    return this.http.post("http://localhost:8080/update",data)
  }
  deleteEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/delete",data)
  }
}
