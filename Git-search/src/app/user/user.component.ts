import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Repo } from '../repo'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   user:any;
   repo:any;
   username:string;

  constructor(private userservice:UserService) { 
   
  }

  finduserinfo(){
    this.repo.updateuserinfo(this.username)
    this.userservice.updateuserinfo(this.username)

    this.userservice.getUserInfor().subscribe(user =>{
      console.log(user);
      this.user = user;
    })

    this.repo.getUserRepo().subscribe(repos =>{
      console.log(repos);
      this.repo = repos;
    })
  }

  ngOnInit() {
  }

}
