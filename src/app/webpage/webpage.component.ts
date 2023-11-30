import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-webpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './webpage.component.html',
  styleUrl: './webpage.component.css',
})
export class WebpageComponent  {


  togglenavbar() {
    const toggleNav: any = document.getElementById('nav-list');

    if (toggleNav?.style.display !== 'flex') {
      toggleNav.style.display = 'flex';
      console.log('true ', toggleNav.style.display);
    } else {
      toggleNav.style.display = 'none';
      console.log('false==> ', toggleNav.style.display);
    }
  }
  close() {
    const toggleNav: any = document.getElementById('nav-list');
    toggleNav.style.display = 'none';
  }
}
