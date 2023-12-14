import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageModel } from '../Models/ImageModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url:string='https://localhost:7293/api/Image'
  constructor(private http:HttpClient) { }
  GetAllImagesAsync():Observable<ImageModel[]>
  {
    return this.http.get<ImageModel[]>(this.url)
  }
  GetAllImagesWhitOutLogoByOrganizationIdAsync(id:number):Observable<ImageModel[]>
  {
    return this.http.get<ImageModel[]>(this.url+'/'+id)
  }
  GetLogoByOrganizationIdAsync(id:number):Observable<ImageModel>
  {
    return this.http.get<ImageModel>(this.url+'/logo/'+id)
  }
}
