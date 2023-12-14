import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunitiesForOrganizationModel } from 'src/app/Models/CommunitiesForOrganizationModel';
import { CommunityModel } from 'src/app/Models/CommunityModel';
import { ImageModel } from 'src/app/Models/ImageModel';
import { OrganizationModel } from 'src/app/Models/OrganizationModel';
import { CommunitiesForOrganizationsService } from 'src/app/Services/communities-for-organizations.service';
import { CommunityService } from 'src/app/Services/community.service';
import { ImageService } from 'src/app/Services/image.service';
import { OrganizationService } from 'src/app/Services/organization.service';



@Component({
  selector: 'app-details-of-organizations',
  templateUrl: './details-of-organizations.component.html',
  styleUrls: ['./details-of-organizations.component.css'],

})
export class DetailsOfOrganizationsComponent implements OnInit {
  name:string=''
  images:ImageModel[]=[]
  loge!:ImageModel
  communities:CommunityModel[]=[]
  communitiesForOrganizations:CommunitiesForOrganizationModel[]=[]
  id!:number
  myorganization!:OrganizationModel  
  ok:boolean=false
  
  currentImage!:ImageModel
  constructor(private organizationService: OrganizationService,private imageService:ImageService,private communitiesForOrganizationsService:CommunitiesForOrganizationsService,private communityService:CommunityService, private router:Router,private route:ActivatedRoute) {
  this.route.params.subscribe(params=>{
    this.name=params['name']


  })
   }

  ngOnInit(): void {
    this.organizationService.GetOrganizationByNameAsync(this.name).subscribe((res)=>
      {
        this.myorganization=res;
        this.id=this.myorganization.organizationId 
        this.GetLogo()
        this.GetImages()
        this.getCommunitiesForOrganization()
        this.ok=true
      })
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      this.currentImage = this.images[randomIndex];
    }, 1500);
    
  }
GetLogo(){
  this.imageService.GetLogoByOrganizationIdAsync(this.id).subscribe((res:ImageModel)=>{
    this.loge=res;
    this.loge.imageName='assets/'+this.loge.imageName
  })
}
GetImages(){
  this.imageService.GetAllImagesWhitOutLogoByOrganizationIdAsync(this.id).subscribe((res)=>
  {
    for(let image of res)
    {
      image.imageName='assets/'+image.imageName
      this.images.push(image)
    }
  })
}
getCommunitiesForOrganization(){
  this.communitiesForOrganizationsService.GetAllCommunitiesForOrganizationByOrganizationIdAsync(this.id).subscribe((res)=>
      {
        this.communitiesForOrganizations=res;
        console.log(this.communitiesForOrganizations)
      })
}
getNameOfCommunity(cfo:CommunitiesForOrganizationModel)
{
  console.log("dfg")
   this.communityService.GetNameCommunityByIdAsync(cfo.communityId).subscribe((res)=>
   {
    console.log(res.communityName)
    return  res.communityName ;
   })
}
getColor(percent:number)
{
  console.log(this.myorganization)
  if (percent<=this.myorganization.maximumTheFirstPart)
  {
      return  this.myorganization.colorOfFirstPart
  }
  if (percent<=this.myorganization.maximumTheSecondPart)
  {
      return this.myorganization.colorOfSecondPart   
  }
  else{
  return this.myorganization.colorOfThirddPart 
  }
}
}