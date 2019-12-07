import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private username:string;

  constructor(private http:HttpClient) { 
    console.log();
    this.username = 'abdikeem';
  }
  
  getUserInfor(){
    return this.http.get("https://api.github.com/users/" + this.username)
  }
  getUserRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos")
  }
  updateuserinfo(username:string){
    return this.username = username;
  }
}
