import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mockRealEstates } from '../mock-real-estate';

@Component({
  selector: 'app-individual-listing',
  templateUrl: './individual-listing.component.html',
  styleUrls: ['./individual-listing.component.css'],
})
export class IndividualListingComponent implements OnInit {
  estateId: number | undefined;
  realEstate: any | undefined;

  // Add carouselOptions here
  carouselOptions = {
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1,
    loop: true,
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the estateId from the route parameters
    this.route.params.subscribe((params) => {
      this.estateId = +params['id'];
      this.realEstate = mockRealEstates.find(
        (estate) => estate.id === this.estateId
      );
    });
  }

  // Navigate to the welcome page
  goToWelcome(): void {
    this.router.navigate(['/']);
  }

  goToContact(): void {
    this.router.navigate(['/contact'], {
      queryParams: {
        area: this.realEstate.area,
        plotSize: this.realEstate.plotSize,
        priceRange: this.realEstate.priceRange,
        estateId: this.realEstate.id,
      },
    });
  }
}
