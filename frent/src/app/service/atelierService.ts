import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AtelierModel } from '../model/atelierModel.model';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AtelierService {
  
  private BASIC_URL = 'http://localhost:8081/api/ateliers';

  constructor(
    private http: HttpClient,
    public authService: AuthService
  ) {}

  // méthode pour ajouter le header Authorization avec JWT
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getAllAtelier(): Observable<AtelierModel[]> {
    return this.http.get<AtelierModel[]>(this.BASIC_URL, { headers: this.getAuthHeaders() });
  }

  postAtelier(atelier: AtelierModel): Observable<AtelierModel> {
    return this.http.post<AtelierModel>(this.BASIC_URL, atelier, { headers: this.getAuthHeaders() });
  }

  updateAtelier(id: number, atelier: AtelierModel): Observable<AtelierModel> {
    return this.http.put<AtelierModel>(`${this.BASIC_URL}/${id}`, atelier, { headers: this.getAuthHeaders() });
  }

  deleteAtelier(id: number): Observable<any> {
    return this.http.delete(`${this.BASIC_URL}/${id}`, { headers: this.getAuthHeaders() });
  }
}
