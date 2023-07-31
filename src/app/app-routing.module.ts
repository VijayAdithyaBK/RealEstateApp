import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { RealEstateListingsComponent } from './real-estate-listings/real-estate-listings.component';
import { IndividualListingComponent } from './individual-listing/individual-listing.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'requirements', component: RequirementsComponent },
  { path: 'listings', component: RealEstateListingsComponent },
  { path: 'listing/:id', component: IndividualListingComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
