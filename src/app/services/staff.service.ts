import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private apiUrl = 'http://localhost:3000/staff';

  constructor(private http: HttpClient) { }
  
  getStaff(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  addStaff(staff: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, staff);
  }
}
