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
      const particleCount = 80; // Optimized particle count for performance
      
      for (let i = 0; i < particleCount; i++) {
        const particle = this.renderer.createElement('div');
        this.renderer.addClass(particle, 'particle');
        
        // Randomize particle size with classes for better performance
        const sizeRandom = Math.random();
        if (sizeRandom < 0.6) {
          this.renderer.addClass(particle, 'particle-sm');
        } else if (sizeRandom < 0.9) {
          this.renderer.addClass(particle, 'particle-md');
        } else {
          this.renderer.addClass(particle, 'particle-lg');
        }

        // Randomize starting position across entire viewport
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        this.renderer.setStyle(particle, 'left', `${xPos}px`);
        this.renderer.setStyle(particle, 'top', `${yPos}px`);

        // Add random animation delay for staggered effect
        const delay = Math.random() * 5;
        this.renderer.setStyle(particle, 'animation-delay', `${delay}s`);

        // Append particle to container
        this.renderer.appendChild(container, particle);
      }
    }
  }
}