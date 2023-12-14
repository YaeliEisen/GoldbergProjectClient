import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { OrganizationModel } from '../Models/OrganizationModel';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  url:string='https://localhost:7293/api/Organization'
  constructor(private http:HttpClient) { }
  GetAllOrganizationsAsync():Observable<OrganizationModel[]>
  {
    return this.http.get<OrganizationModel[]>(this.url)
   
    }
  GetOrganizationByNameAsync(name:string):Observable<OrganizationModel>
  {
  return this.http.get<OrganizationModel>(this.url+'/'+name)
  }
}