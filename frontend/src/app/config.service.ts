import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private baseUrl = 'http://localhost:7400/api';
  static getBaseUrl: any;
  constructor() {}
  getBaseUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }
}
