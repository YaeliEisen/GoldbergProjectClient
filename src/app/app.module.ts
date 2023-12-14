import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { TimerComponent } from './Components/timer/timer.component';
import { AllOrganizationComponent } from './Components/all-organization/all-organization.component';
import { DetailsOfOrganizationsComponent } from './Components/details-of-organizations/details-of-organizations.component';



@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    AllOrganizationComponent,
    DetailsOfOrganizationsComponent,
   

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  
  bootstrap: [AppComponent],
 
})
export class AppModule { }
