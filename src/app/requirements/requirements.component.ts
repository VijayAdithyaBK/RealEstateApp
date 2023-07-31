// requirements.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; // Add this import

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css'],
})
export class RequirementsComponent implements OnInit {
  formData = {
    plotDimensions: '',
    area: '',
    priceRange: '',
  };

  @ViewChild('requirementsForm') requirementsForm!: NgForm; // Add this line with non-null assertion

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    // Check if the form is valid before navigating
    if (this.requirementsForm.valid) {
      // Navigate to the real estate listings page and pass the form data as query parameters
      this.router.navigate(['/listings'], { queryParams: this.formData });
    }
  }
}
