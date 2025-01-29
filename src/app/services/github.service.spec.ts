import { HttpClient } from '@angular/common/http';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;
  let httpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);
    service = new GithubService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
