import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private username:string;
private clientid:'';
private clientsecret:'';
//clientid and clientsecret are optional even if there are not used one can still fetch the data from github but with limited number of times// 


  constructor(private http:HttpClient) { 
    console.log("service is know ready!");
    this.username = 'abdikeem';
  }
  
  getUserInfor(){
    return this.http.get("https://api.github.com/users/" + this.username)
    // .pipe(map(res => res.json()));
  }
}
