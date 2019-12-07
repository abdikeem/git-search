import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repoitems: any[];
  repoName:string= "akan";

  constructor(private profileService: UserService) { 
    
  }

  finduserinfo(){
      this.UserService.UpdateRepo(this.repoName);
      this.UserService.searchrepos().subscribe(repo => {
        this.repoitems = repo["items"];
        console.log(this.repoitems);
      })
    }

  ngOnInit() {
    this.finduserinfo()
  }

}

