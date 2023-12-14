import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunitiesForOrganizationModel } from '../Models/CommunitiesForOrganizationModel';


@Injectable({
  providedIn: 'root'
})
export class CommunitiesForOrganizationsService {
  url:string='https://localhost:7293/api/CommunitiesForOrganization'
  constructor(private http:HttpClient) { }
  GetAllCommunitiesForOrganizationAsync():Observable<CommunitiesForOrganizationModel[]>
  {
    return this.http.get<CommunitiesForOrganizationModel[]>(this.url)
  }
  GetAllCommunitiesForOrganizationByOrganizationIdAsync(id:number):Observable<CommunitiesForOrganizationModel[]>
  {
    return this.http.get<CommunitiesForOrganizationModel[]>(this.url+'/'+id)
  }
}
