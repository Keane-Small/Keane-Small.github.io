import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeSection = '';

  setActiveSection(section: string) {
    this.activeSection = section;
}

@HostListener('window:scroll', ['$event'])
onWindowScroll() {
  const sections = document.querySelectorAll('section');
  let foundSection = '';

  sections.forEach((section:any ) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2){
      foundSection = section.id;
    }
  });

  this.activeSection = foundSection;
}
ngOnInit() {
  this.onWindowScroll();
}

}
