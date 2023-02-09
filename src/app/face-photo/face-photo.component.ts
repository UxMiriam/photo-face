import { Component } from '@angular/core';


/**
 * View to take face photo
 *
 * @export
 * @class FacePhotoComponent
 */
@Component({
  selector: 'app-face-photo',
  templateUrl: './face-photo.component.html',
  styleUrls: ['./face-photo.component.scss']
})
export class FacePhotoComponent {
  instructionsOne: boolean = true;
  stepOne: boolean = false;

  /**
   * Card's data
   *
   * @memberof IdPhotoComponent
   */
  passData = {
    imageUrl: '../../assets/img/autophoto/smile-solid.svg',
    imgAlt: 'Cara sonriendo',
    title: '¡La fotografía es automática!',
    paragraph: 'Solo coloca tu rostro dentro del margen rojo, y al reconocerlo, cambiará a color azul.',
    paragraphTwo: '¡Entonces debes sonreír para que se tome la fotografía!'
    
  }

  dataId = {
    showHeader: true,
    title: 'Coloca dentro del margen tu rostro',
    showActions: false,
    showVideo: true,
    url: '/validation'
  }

  /**
   * Show capture ID card
   * @param ques 
   */
  nextView(response: boolean){
    this.instructionsOne = !this.instructionsOne
    this.stepOne = response;
  }

  nextStep(response: boolean){
    console.log('hola')
  }
}
