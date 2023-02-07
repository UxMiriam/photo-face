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
  instructionsOne: boolean = true;
  stepOne: boolean = false;

  /**
   * Card's data
   *
   * @memberof IdPhotoComponent
   */
  passData = {
    imageUrl: '../../assets/img/autophoto/credencial-muestra.svg',
    imgAlt: 'Foto automática al ingresar a rectangulo azul',
    title: '¡La fotografía es automática!',
    paragraph: 'Coloca tu identificación oficial (INE, Pasaporte o FM3) dentro del margen rojo hasta que cambie a color azul.',
  }

  /**
   * Show capture ID card
   * @param ques 
   */
  nextView(response: boolean){
    this.instructionsOne = !this.instructionsOne
    console.log(this.instructionsOne, 'esto')
    this.stepOne = response;
  }

  nextStep(response: boolean){
    console.log('hola')
  }
}
