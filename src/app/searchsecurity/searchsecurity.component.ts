import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchsecurity',
  templateUrl: './searchsecurity.component.html',
  styleUrls: ['./searchsecurity.component.css']
})
export class SearchsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) {}

  sCode=""
  search=()=>{
    let data={
      "sCode":this.sCode
    }
    console.log(data)
    this.myapi.searchsec(data).subscribe(
      (res)=>{
        this.viewdata=res

      }
    )
   }
   
   update=()=>{
  this.myapi.updatesec(this.viewdata[0]).subscribe()
  alert("updated")
 }

   viewdata:any=[]
   
  ngOnInit(): void {
  }

}
