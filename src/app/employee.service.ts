import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/simplewebapp/employees'

  constructor(private httpClient: HttpClient) {
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl)
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  createEmployee(employee: Employee): Observable<Object> {
    employee.dateOfBirth = employee.dateOfBirth.split('-').reverse().join('.');
    return this.httpClient.post(this.baseUrl, employee)
  }

  updateEmployee(employeeId: number, employee: Employee): Observable<Object> {
    employee.dateOfBirth = employee.dateOfBirth.split('-').reverse().join('.');
    return this.httpClient.put(`${this.baseUrl}/${employeeId}`, employee)
  }

  getEmployeeById(employeeId: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${employeeId}`);

  }

}
