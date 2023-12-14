import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfOrganizationsComponent } from './details-of-organizations.component';

describe('DetailsOfOrganizationsComponent', () => {
  let component: DetailsOfOrganizationsComponent;
  let fixture: ComponentFixture<DetailsOfOrganizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfOrganizationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsOfOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
