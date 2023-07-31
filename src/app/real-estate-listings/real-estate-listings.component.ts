// real-estate-listings.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mockRealEstates } from '../mock-real-estate';

@Component({
  selector: 'app-real-estate-listings',
  templateUrl: './real-estate-listings.component.html',
  styleUrls: ['./real-estate-listings.component.css'],
})
export class RealEstateListingsComponent implements OnInit {
  filteredRealEstates: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  // Navigate to the welcome page
  goToWelcome(): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    // Get the parameters from the route snapshot
    const params = this.route.snapshot.queryParams;

    // Filter the real estates based on the selected criteria
    this.filteredRealEstates = mockRealEstates.filter((estate) => {
      // Extract the minimum and maximum plot sizes from the selected range
      const [minPlotSize, maxPlotSize] = params['plotDimensions']
        .split('-')
        .map((val: string) => parseInt(val.trim(), 10));

      // Extract the minimum and maximum price values from the selected range
      const [minPrice, maxPrice] = params['priceRange']
        .split('-')
        .map((val: string) =>
          parseInt(val.trim().replace('₹', '').replace(',', ''), 10)
        );

      // Check if the plot size is within the selected range
      const estatePlotSize = parseInt(estate['plotSize'].split(' ')[0], 10);
      const plotSizeWithinRange =
        estatePlotSize >= minPlotSize && estatePlotSize <= maxPlotSize;

      // Check if the price range is within the selected range
      const estatePrice = parseInt(
        estate['priceRange']
          .split('-')[1]
          .trim()
          .replace('₹', '')
          .replace(',', ''),
        10
      );
      const priceWithinRange =
        estatePrice >= minPrice && estatePrice <= maxPrice;

      // Return true if both plot size and price range are within the selected ranges
      return (
        estate['area'] === params['area'] &&
        plotSizeWithinRange &&
        priceWithinRange
      );
    });
  }

  viewListing(id: number): void {
    this.router.navigate(['/listing', id]);
  }
}
