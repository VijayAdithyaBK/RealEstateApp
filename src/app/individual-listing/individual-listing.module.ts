// individual-listing.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o'; // Import CarouselModule from 'ngx-owl-carousel-o'

import { IndividualListingComponent } from './individual-listing.component';

@NgModule({
  declarations: [IndividualListingComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, CarouselModule], // Include CarouselModule here
})
export class IndividualListingModule {}
