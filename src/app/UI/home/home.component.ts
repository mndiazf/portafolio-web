import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('content') content!: ElementRef<HTMLDivElement>;

  constructor() {}

  scrollToContent(): void {
      if (this.content && this.content.nativeElement) {
          const contentEl = this.content.nativeElement;
          const offset = contentEl.getBoundingClientRect().top + window.pageYOffset;
          
          window.scrollTo({
              top: offset,
              behavior: 'smooth'
          });
      }
  }
}