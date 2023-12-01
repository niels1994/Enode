import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, concatMap, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAuthorizationService {
  tokenUrl = 'https://oauth.sandbox.enode.io/oauth2/token';
  tokenOptions = {
    'method': 'POST',
    // 'url': `${this.apiUrl}`,
    'headers': {
      'Authorization': `Basic NzNhZDA0YjAtZDc4NS00NTJjLWE3YzktOTRkZjBjYWU3NmExOjEyYjk4NmQwODc1ZGEwMjZlYzU2YzJiY2UyZjNiZTVkMzRjMWVhNDU=`,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  };

  subscribeUrl = 'https://oauth.sandbox.enode.io/oauth2/token';
  subscribeOptions = {
    method: 'POST',
    // 'url': `${this.apiUrl}`,
    headers: {
      'Authorization': `Basic NzNhZDA0YjAtZDc4NS00NTJjLWE3YzktOTRkZjBjYWU3NmExOjEyYjk4NmQwODc1ZGEwMjZlYzU2YzJiY2UyZjNiZTVkMzRjMWVhNDU=`,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  };

  constructor(private http: HttpClient) { }

  getBearerToken(): Observable<any[]> {
    return this.http.post<any[]>(`${this.tokenUrl}`, this.tokenOptions);
  }

  getSubscribeLink(): Observable<any[]> {
    // return concatMap((tokenData)=> {
    //     const headers = {};
        // headers = this.subscribeOptions.headers.append('Authorization', 'Bearer ' + this.token.access_token);

        return this.http.get<any[]>(this.subscribeUrl, { headers: this.subscribeOptions.headers })
      // })

  }


}
