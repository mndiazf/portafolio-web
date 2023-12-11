import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  asunto: string = '';
  mensaje: string = '';

  getMailtoLink(): string {
    const destinatario = 'mn.diaz.f@gmail.com';
    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(this.asunto)}&body=${encodeURIComponent(this.mensaje)}`;
    return mailtoLink;
  }
}