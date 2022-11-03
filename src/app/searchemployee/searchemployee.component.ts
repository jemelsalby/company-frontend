import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {}

  empCode=""
  search=()=>{
    let data={
      "empCode":this.empCode
    }
    console.log(data)
    this.myapi.searchemp(data).subscribe(
      (res)=>{
        this.viewdata=res

      }
    )
   }
   
   update=()=>{
  this.myapi.updateemp(this.viewdata[0]).subscribe()
  alert("updated")
 }

   viewdata:any=[
]
    

  ngOnInit(): void {
  }

}
