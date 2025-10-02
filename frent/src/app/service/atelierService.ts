import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AtelierModel  } from '../model/atelierModel.model';
import { AtelierComponent } from '../atelier/atelier';


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
 updateAtelier(id: number, atelier: AtelierModel) {
  return this.http.put<AtelierModel>(`${this.BASIC_URL}/${id}`, atelier);
}


}
