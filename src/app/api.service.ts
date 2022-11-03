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


  addsecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/Sadd",data)
}
viewsec=()=>{
  return this.http.get("http://localhost:8080/viewSecurty")
}
deletesec=(data:any)=>{
  return this.http.post("http://localhost:8080/deleteSecurity",data)
}
searchsec=(data:any)=>{
  return this.http.post("http://localhost:8080/searchSecurity",data)
}
updatesec=(data:any)=>{
  return this.http.post("http://localhost:8080/updateSecurity",data)
}
}
