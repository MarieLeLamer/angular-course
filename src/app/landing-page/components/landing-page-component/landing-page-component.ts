import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-component',
  imports: [FormsModule],
  templateUrl: './landing-page-component.html',
  styleUrl: './landing-page-component.scss',
})
export class LandingPageComponent {

  userEmail!: string;

  constructor(private router: Router) {}
  navigateToSnapface() {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(form : NgForm) : void {
    console.log('Form submitted:', form.value);
  }
}
