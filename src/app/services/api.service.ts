import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url="https://emp-jsonserver-angular.onrender.com"

  constructor(private http:HttpClient) { }

  addEmployeeAPI(empDetails:any){
    return this.http.post(`${this.server_url}/userDetails`,empDetails)
  }

  getAllEmployeeAPI()
  {
    return this.http.get(`${this.server_url}/userDetails`)
  }

  editEmployeeAPI(empDetails:any){
    return this.http.put(`${this.server_url}/userDetails/${empDetails.id}`,empDetails)
  }

  deleteEmployeeAPI(id:any){
    return this.http.delete(`${this.server_url}/userDetails/${id}`)
  }

  filterAPI(status:any) {
    return this.http.get(`${this.server_url}/userDetails?status=${status}`);
  }
}
