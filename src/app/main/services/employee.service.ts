import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.serverName

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private httpClient: HttpClient) { }

  public getEmployeeRecords(): Observable <any> {
    const url = API_URL + 'employees';
    return this.httpClient.get (url).pipe (map((res: any) => {
      return res;
    }), catchError ((error: HttpErrorResponse): any => console.log (error)));
  }
  public deleteEmployeeRecords(id: any): Observable <any> {
    const url = API_URL + 'employees/' + id;
    return this.httpClient.delete (url).pipe (map((res) => {
      return res;
    }), catchError ((error: HttpErrorResponse): any => console.log (error)));
  }
  public addEmployeeRecords(employee: any): Observable <any> {
    const url = API_URL + 'employees';
    return this.httpClient.post (url,employee).pipe (map((res) => {
      return res;
    }), catchError ((error: HttpErrorResponse): any => console.log (error)));
  }
  public updateEmployeeRecords(employee: any): Observable <any> {
    const url = API_URL + 'employees/' + employee.id;
    return this.httpClient.put (url,employee).pipe (map((res) => {
      return res;
    }), catchError ((error: HttpErrorResponse): any => console.log (error)));
  }
}
