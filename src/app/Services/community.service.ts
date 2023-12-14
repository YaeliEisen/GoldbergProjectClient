import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunityModel } from '../Models/CommunityModel';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  url:string='https://localhost:7293/api/Community'
  constructor(private http:HttpClient) { }
  GetAllCommunitiesAsync():Observable<CommunityModel[]>
  {
    return this.http.get<CommunityModel[]>(this.url)
  }
  GetNameCommunityByIdAsync(id:number):Observable<CommunityModel>
  {
    return this.http.get<CommunityModel>(this.url+'/'+id)
  }
}
