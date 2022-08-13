import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseUrl = 'http://localhost:8080/api/v1/health-vitals';
const token = localStorage.getItem("token")
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class HealthVitalsService {

  constructor(private http:HttpClient) { }
  get(starDate:any):Observable<any>{
    return this.http.get(`${baseUrl}?startDate=${starDate}`,httpOptions)
  }
  create(data:any):Observable<any>{
     return this.http.post(`${baseUrl}`,data,httpOptions)
  }
}
