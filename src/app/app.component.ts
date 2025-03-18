import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { BackgroundComponent } from './background/background.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent, AboutMeComponent, ProjectsComponent, BackgroundComponent, ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-portfolio';


}
