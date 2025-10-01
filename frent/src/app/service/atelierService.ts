import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AtelierModel  } from '../model/atelierModel.model';


@Injectable({
  providedIn: 'root'
})
export class AtelierService {
  private BASIC_URL = 'http://localhost:8081/api/ateliers';

  constructor(private http: HttpClient) {}

  getAllAtelier(): Observable<AtelierModel []> {
    return this.http.get<AtelierModel []>(this.BASIC_URL);
  }

  postAtelier(atelier: AtelierModel ): Observable<AtelierModel > {
    return this.http.post<AtelierModel >(this.BASIC_URL, atelier);
  }
   getAtelierById(id: number): Observable<AtelierModel> {
    return this.http.get<AtelierModel>(`${this.BASIC_URL}/${id}`);
  }

}
