import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const baseUrl = 'http://localhost:8080/api/v1/medicine-dosage';
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
export class MedicinService {

  constructor(private http:HttpClient) { }

  save(data:any):Observable<any>{
    return this.http.post(`${baseUrl}`,data,httpOptions)
  }

  getAll(name:any,page:any,startDate:any,endDate:any):Observable<any>{
    return this.http.get(`${baseUrl}?name=${name}&page=${page}&startDate=${startDate}&endDate=${endDate}`,httpOptions)
  }
}
