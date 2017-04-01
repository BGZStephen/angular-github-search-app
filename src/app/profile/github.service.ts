import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http"
import 'rxjs/Rx';

@Injectable()
export class GithubService {

  private username: string;
  private clientId = "70cfd1197740d612e15a";
  private clientSecret = "25f323b4eff251906e873b0d5b1493896f0822ae";

  constructor(private http: Http) {
    console.log("Github Service Ready")
    this.username = "bgzstephen"
  }

  getUser() {
    return this.http.get("http://api.github.com/users/"+this.username+"?client_id="+this.clientId+"&client_sercret="+this.clientSecret)
    .map(res => res.json())
  }

  getRepos() {
    return this.http.get("http://api.github.com/users/"+this.username+"/repos?client_id="+this.clientId+"&client_sercret="+this.clientSecret)
    .map(res => res.json())
  }

  updateUser(username) {
    this.username = username;
  }
}
