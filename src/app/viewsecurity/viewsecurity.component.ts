import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewsecurity',
  templateUrl: './viewsecurity.component.html',
  styleUrls: ['./viewsecurity.component.css']
})
export class ViewsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewsec().subscribe(
      (data)=>{
        this.viewData=data
      }
    )
   }
   deleteSec=(sCode:any)=>{
    let data={
      "sCode":sCode
    }
    this.myapi.deletesec(data).subscribe()
    this.fetchData()
    alert("Deleted")
   }
viewData:any=[]
  ngOnInit(): void {
  }

}
