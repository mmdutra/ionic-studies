import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import MenuItem from '../interfaces/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getMenu() {
    return this.http.get<MenuItem[]>('/assets/data/menu.json');
  }
}
