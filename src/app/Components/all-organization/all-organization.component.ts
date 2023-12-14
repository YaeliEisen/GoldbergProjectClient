import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationModel } from 'src/app/Models/OrganizationModel';
import { OrganizationService } from 'src/app/Services/organization.service';

@Component({
  selector: 'app-all-organization',
  templateUrl: './all-organization.component.html',
  styleUrls: ['./all-organization.component.css']
})
export class AllOrganizationComponent implements OnInit {

  organizations:OrganizationModel[]=[]

  constructor(private organizationService: OrganizationService,private router:Router) { }

  ngOnInit(): void {
    this.organizationService.GetAllOrganizationsAsync().subscribe((res) => {
      this.organizations = res; 
    })
   
  }
  goToComponentWithOrganization(name:string)
  {

    this.router.navigate(['/organization/'+name])
  }

}
