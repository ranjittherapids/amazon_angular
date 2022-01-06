import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
@Component({
  selector: 'Home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent     {
  users :any;
constructor(private userdata:UsersDataService){
this.userdata.userdata().subscribe((data)=>{
 
  this.users=data

  console.log(this.users,'man')
})

}
Add_Item(id:string){
  console.log(id,"hello man ")
}
  

}
