import { Component, OnInit, Renderer2, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'] // Note the correct property name is 'styleUrls'
})
export class BackgroundComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createParticles();
    }
  }

  createParticles(): void {
    const container = this.el.nativeElement.querySelector('#particle-container');
    
    if (container) {
      for (let i = 0; i < 100; i++) {  // Change the number of particles as needed
        const particle = this.renderer.createElement('div');
        this.renderer.addClass(particle, 'particle');
        
        // Randomize particle size
        const size = Math.random() * 5 + 2; // Size between 2px and 7px
        this.renderer.setStyle(particle, 'width', `${size}px`);
        this.renderer.setStyle(particle, 'height', `${size}px`);

        // Randomize position
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        this.renderer.setStyle(particle, 'left', `${xPos}px`);
        this.renderer.setStyle(particle, 'top', `${yPos}px`);

        // Append particle to container
        this.renderer.appendChild(container, particle);
      }
    }
  }
}