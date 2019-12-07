import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   user:any;

  constructor(private userservice:UserService) { 
    this.userservice.getUserInfor().subscribe(user =>{
      console.log(user);
      this.user = user;
    })
  }

  ngOnInit() {
  }

}
