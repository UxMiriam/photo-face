import { Component, Input, OnInit } from '@angular/core';


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
export class CardComponent implements OnInit {
  @Input() data: any;
  showHeader?: boolean = false;
  imageUrl?: string;
  imgAlt?: string;
  title: string = '';
  paragraph: string = '';
  showBtnGhost?: boolean = false;

  ngOnInit() {
    this.showHeader = this.data.showHeader;
    this.imageUrl = this.data.imageUrl;
    this.imgAlt = this.data.imgAlt;
    this.title = this.data.title;
    this.paragraph = this.data.paragraph;
    this.showBtnGhost = this.data.showBtnGhost;
  }
}
