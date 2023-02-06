import { Component } from '@angular/core';

/**
 * View Capture photo of official ID
 */
@Component({
  selector: 'app-id-photo',
  templateUrl: './id-photo.component.html',
  styleUrls: ['./id-photo.component.scss']
})
export class IdPhotoComponent {
  passData = {
    imageUrl: '../../assets/img/autophoto/credencial-muestra.svg',
    imgAlt: 'texto descriptivo',
    title: '¡La fotografía es automática!',
    paragraph: 'Coloca tu identificación oficial (INE, Pasaporte o FM3) dentro del margen rojo hasta que cambie a color azul.',
  }
}
