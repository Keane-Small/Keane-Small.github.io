import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeSection = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Update scroll progress bar
    const scrollProgress = document.querySelector('.scroll-progress') as HTMLElement;
    if (scrollProgress) {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      scrollProgress.style.width = scrolled + '%';
    }

    // Update active section
    const sections = document.querySelectorAll('section');
    let foundSection = '';

    sections.forEach((section: any) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        foundSection = section.id;
      }
    });

    this.activeSection = foundSection;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onWindowScroll();
    }
  }
}
