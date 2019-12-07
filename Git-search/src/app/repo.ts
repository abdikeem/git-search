import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Repo {

private username:string;

 constructor(private http:HttpClient) { 
    console.log("service is know ready!");
    this.username = 'abdikeem';
  }
  

    getUserRepos(){
        return this.http.get("https://api.github.com/users/" + this.username + "/repos")
      }

  updateuserinfo(username:string){
    return this.username = username;
  }
}
