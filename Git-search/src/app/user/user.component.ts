import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   user:any;
   repo:any;
   username:string = 'abdikeem'

  constructor(private userservice:UserService) { 
   
  }

  finduserinfo(){
    this.userservice.updateuserinfo(this.username)

    this.userservice.getUserInfor().subscribe(user =>{
      console.log(user);
      this.user = user;
    })
    this.userservice.getUserRepos().subscribe(repo =>{
      console.log(repo);
      this.repo = repo;
    })
  }
  ngOnInit() {
  }

}
