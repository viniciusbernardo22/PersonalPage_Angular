import { Observable } from 'rxjs';
import { GithubUserResponse } from "src/app/types/githubUserResponse";

export interface IGithubService {

    GetUser(): Observable<GithubUserResponse>;
}
