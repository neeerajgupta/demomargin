import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
 
  

  marginClass: string = 'p-mt-1';
  topMargin() { 
    switch (this.marginClass) {
      case 'p-mt-1':
        this.marginClass = 'p-mt-2';
        break;
      case 'p-mt-2':
        this.marginClass = 'p-mt-3';
        break;
      case 'p-mt-3':
        this.marginClass = 'p-mt-4';
        break;
        case 'p-mt-4':
        this.marginClass = 'p-mt-1';
        break;
      default:
        this.marginClass = 'p-mt-1';
    }
  }
 
 // marginClass: string = 'p-mt-1';
  ButtomMargin() { 
    switch (this.marginClass) {
      case 'p-mb-1':
        this.marginClass = 'p-mb-2';
        break;
      case 'p-mb-2':
        this.marginClass = 'p-mb-3';
        break;
      case 'p-mb-3':
        this.marginClass = 'p-mb-4';
        break;
        case 'p-mb-4':
        this.marginClass = 'p-mb-1';
        break;
      default:
        this.marginClass = 'p-mb-1';
    }
  }

  leftMargin() { 
    switch (this.marginClass) {
      case 'p-ml-1':
        this.marginClass = 'p-ml-2';
        break;
      case 'p-ml-2':
        this.marginClass = 'p-ml-3';
        break;
      case 'p-ml-3':
        this.marginClass = 'p-ml-4';
        break;
        case 'p-ml-4':
        this.marginClass = 'p-ml-1';
        break;
      default:
        this.marginClass = 'p-ml-1';
    }
  }
  rightMargin() { 
    switch (this.marginClass) {
      case 'p-mr-1':
        this.marginClass = 'p-mr-2';
        break;
      case 'p-mr-2':
        this.marginClass = 'p-mr-3';
        break;
      case 'p-mr-3':
        this.marginClass = 'p-mr-4';
        break;
        case 'p-mr-4':
        this.marginClass = 'p-mr-1';
        break;
      default:
        this.marginClass = 'p-mr-1';
    }
  }
}