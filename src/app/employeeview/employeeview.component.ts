import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeeview',
  templateUrl: './employeeview.component.html',
  styleUrls: ['./employeeview.component.css']
})
export class EmployeeviewComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewemp().subscribe(
      (data)=>{
        this.viewData=data
      }
    )
   }
   deleteEmployee=(empCode:any)=>{
    let data={
      "empCode":empCode
    }
    this.myapi.deleteEmp(data).subscribe()
    this.fetchData()
    alert("Deleted")
   }
viewData:any=[]
  ngOnInit(): void {
  }

}
