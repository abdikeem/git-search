import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private username:string;

  constructor(private http:HttpClient) { 
    console.log("service is know ready!");
    this.username = 'abdikeem';
  }
    
  getUserInfor(){
    return this.http.get("https://api.github.com/users/" + this.username)
  }
  
  updateuserinfo(username:string){
    return this.username = username;
  }
}
