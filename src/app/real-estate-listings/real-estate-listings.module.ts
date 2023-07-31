// real-estate-listings.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule

import { RealEstateListingsComponent } from './real-estate-listings.component';

@NgModule({
  declarations: [RealEstateListingsComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule], // Include MatIconModule here
})
export class RealEstateListingsModule {}
