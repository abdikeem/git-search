import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 username:string;
 apikey:string;
 repoName:string;


  constructor(private http:HttpClient) { 
    console.log("service is know ready!");
    this.username = 'abdikeem';
  }
  
  getUserInfor(){
    return this.http.get("https://api.github.com/users/" + this.username)
  }
  getUserRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos")
  }
  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
    }))
  }
  updateuserinfo(username:string){
    return this.username = username;
  }
  UpdateRepo(repo:string) {
    this.repoName = repo;
  }

}
