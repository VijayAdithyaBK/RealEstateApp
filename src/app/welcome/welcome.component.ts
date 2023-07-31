// welcome.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Wait for 1 second before redirecting to the requirements page
    setTimeout(() => {
      this.router.navigate(['/requirements']);
    }, 1000);
  }
}
