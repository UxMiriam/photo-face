import { Component } from '@angular/core';

@Component({
  selector: 'app-validation-photos',
  templateUrl: './validation-photos.component.html',
  styleUrls: ['./validation-photos.component.scss']
})
export class ValidationPhotosComponent {
  passData = {
    showHeader: true,
    title: 'Reconocimiento facial biométrico en proceso',
    paragraph: 'Estamos realizando la validación de la fotografía de tu documento contra la foto de tu rostro para verificar tu identidad.',
    showActions: false,
    loader: true
  }

}
