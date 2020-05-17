import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/server-config';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getSubscription(id: number) {
    return this.http.get(`${url}/subscriptions/${id}`);
  }
}
