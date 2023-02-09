import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  @Input() stream: any;

   /**
   * Request user access to cam otherwise send error
   *
   * @memberof CardComponent
   */
  async accessCamera(){
    try{
      let video = await navigator.mediaDevices.getUserMedia({video: true})
      let streams = this.videoElement.nativeElement;
      streams.srcObject = video;
      streams.play()
    } catch(err) {
      // ToDo: Change alert to a modal
      alert('Necesitamos permiso para accesar a tu cámara')
    }
  }


  ngOnInit() {
    this.accessCamera()
  }
}
