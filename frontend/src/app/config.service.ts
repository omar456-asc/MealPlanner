import { Injectable, inject } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private baseUrl = environment.baseUrl;
  static getBaseUrl: any;
  constructor() {}
  getBaseUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }
}
