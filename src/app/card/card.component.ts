import { Component, OnInit } from '@angular/core';


/**
 * Component that show the style card
 *
 * @export
 * @class CardComponent
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  showHeader?: boolean = true;
  imageUrl?: string = '../../assets/img/autophoto/credencial-muestra.svg';
  imgAlt?: string = 'texto descriptivo'
  title: string = '¡La fotografía es automática!';
  paragraph: string = 'Coloca tu identificación oficial (INE, Pasaporte o FM3) dentro del margen rojo hasta que cambie a color azul.';

  ngOnInit(){
    
  }
}
