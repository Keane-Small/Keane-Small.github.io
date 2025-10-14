import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeSection = '';
  isScrolled = false;
  mobileMenuOpen = false;

  setActiveSection(section: string) {
    this.activeSection = section;
    this.mobileMenuOpen = false; // Close mobile menu on navigation
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Handle navbar background on scroll
    this.isScrolled = window.scrollY > 50;

    // Update active section based on scroll position
    const sections = document.querySelectorAll('section');
    let foundSection = '';

    sections.forEach((section: any) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
        foundSection = section.id;
      }
    });

    if (foundSection) {
      this.activeSection = foundSection;
    }
  }

  ngOnInit() {
    this.onWindowScroll();
  }
}
