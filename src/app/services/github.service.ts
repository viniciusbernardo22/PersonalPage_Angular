import { Injectable } from '@angular/core';
import { IGithubService } from '../interfaces/services/IGithubService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubUserResponse } from '../types/githubUserResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService implements IGithubService{

  private readonly _baseUrl: string = environment.GithubBaseURL;

  constructor(private _http: HttpClient) { }

  GetUser(): Observable<GithubUserResponse> {
    const user = environment.GithubUser;
    const url = `${this._baseUrl}/users/${user}`

    return this._http.get<GithubUserResponse>(url);
  }



}
