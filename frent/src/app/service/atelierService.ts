import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8081/api/ateliers';

@Injectable({
  providedIn: 'root'
})
export class AtelierService {
  constructor(private http: HttpClient) {}

  postAtelier(atelier: any): Observable<any> {
    return this.http.post(BASIC_URL, atelier);
  }

  getAllAtelier(): Observable<any> {
    return this.http.get(BASIC_URL);
  }
}
