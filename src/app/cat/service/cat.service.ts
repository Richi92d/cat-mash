import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatList } from '../interface/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getAllCat(): Observable<CatList> {
    return this.http.get<CatList>("https://latelier.co//data/cats.json");
  }
}
