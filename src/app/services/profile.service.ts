import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const baseUrl = 'http://localhost:8080/api/v1/profile';
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
export class ProfileService {

  constructor(private http:HttpClient) { }
  get():Observable<any>{
    return this.http.get(`${baseUrl}`,httpOptions)
  }
  updated(data:any):Observable<any>{
    return this.http.put(`${baseUrl}`,data,httpOptions)
  }
}
