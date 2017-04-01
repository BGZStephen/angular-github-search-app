import { Component } from '@angular/core';
import { GithubService } from "./github.service"
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  private user: any;
  private repos = [];
  private username: string;

  constructor(private githubService: GithubService) {
    this.user = false;
  }

  searchUser() {
    this.githubService.updateUser(this.username);

    this.githubService.getUser().subscribe(user => {
      this.user = user;
    })

    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }
}
