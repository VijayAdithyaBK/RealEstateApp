// contact.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common'; // Import DatePipe

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  estateId: number | undefined;
  area: string | undefined;
  plotSize: string | undefined;
  priceRange: string | undefined;

  // Client Details
  name: string = '';
  contactNumber: string = '';
  timeToContact: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    // Get the query parameters from the route
    this.route.queryParams.subscribe((params) => {
      this.estateId = +params['estateId'];
      this.area = params['area'];
      this.plotSize = params['plotSize'];
      this.priceRange = params['priceRange'];
    });
  }

  // Navigate to the welcome page
  goToWelcome(): void {
    this.router.navigate(['/']);
  }

  sendContactMessage(): void {
    var formattedTime;
    // Check if a time is selected
    if (this.timeToContact) {
      // Create a date object for today with the selected time
      const currentTime = new Date();
      const timeParts = this.timeToContact.split(':');
      currentTime.setHours(+timeParts[0]);
      currentTime.setMinutes(+timeParts[1]);

      // Format the date object with DatePipe
      formattedTime = this.datePipe.transform(currentTime, 'h:mm a');
    }

    // You can handle the logic to send the contact message here
    // For example, you can use a service to send the message to the real estate agent's WhatsApp number.
    const message = `Hi, I am interested in the property with the following details:
    Estate ID: ${this.estateId}
    Area: ${this.area}
    Plot Size: ${this.plotSize}
    Price Range: ${this.priceRange}
    Contact Details:
    Name: ${this.name}
    Contact Number: ${this.contactNumber}
    Preferred Time to Contact: ${formattedTime}`;

    // Replace '9876543210' with the real estate agent's WhatsApp number
    const whatsappUrl = `https://wa.me/9876543210?text=${encodeURIComponent(
      message
    )}`;

    // Open the WhatsApp link in a new tab
    window.open(whatsappUrl, '_blank');
  }

  isValidForm(): boolean {
    // Add your form validation logic here
    // For example, you can check if all required fields are filled
    // and return true only if the form is valid.

    // For simplicity, let's assume the form is valid if name, contact number, and time to contact are filled.
    return (
      this.name.trim() !== '' &&
      this.contactNumber.trim() !== '' &&
      this.timeToContact.trim() !== ''
    );
  }
}
