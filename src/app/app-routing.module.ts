import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrganizationComponent } from './Components/all-organization/all-organization.component';
import { DetailsOfOrganizationsComponent } from './Components/details-of-organizations/details-of-organizations.component';



const routes: Routes = [{path:'organization/:name',component:DetailsOfOrganizationsComponent,children:[{path:'organization/:name',component:DetailsOfOrganizationsComponent}]}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
