import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseUrl = 'http://localhost:8080/api/v1/appointments';
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
export class AppointmentService {

  constructor(private http: HttpClient) {
  }

  create(data: any):Observable<any> {
    return this.http.post(baseUrl, data, httpOptions)
  }

  get(page: any, keyword: any, startDate: any, endDate: any):Observable<any> {
    return this.http.get(`${baseUrl}?page=${page}&keyword=${keyword}&startDate=${startDate}&endDate=${endDate}`, httpOptions);
  }

  update(id: number, data: any):Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data, httpOptions)
  }

  delete(id: number):Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`,httpOptions)
  }
}
