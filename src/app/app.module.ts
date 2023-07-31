// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add this import
import { MatInputModule } from '@angular/material/input'; // Add this import
import { MatButtonModule } from '@angular/material/button'; // Add this import
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { RealEstateListingsModule } from './real-estate-listings/real-estate-listings.module'; // Import RealEstateListingsModule
import { IndividualListingModule } from './individual-listing/individual-listing.module';
import { ContactComponent } from './contact/contact.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RequirementsComponent,
    ContactComponent,
    // Add other component declarations here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // Add this module
    MatInputModule, // Add this module
    MatButtonModule, // Add this module
    RealEstateListingsModule,
    MatIconModule,
    IndividualListingModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
