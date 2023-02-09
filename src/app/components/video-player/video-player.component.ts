import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import * as canvas from 'canvas';
import * as faceapi from 'face-api.js'
/**
 * Component to use de media device cam
 *
 * @export
 * @class VideoPlayerComponent
 * @implements {OnInit}
 */
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
   * @memberof VideoPlayerComponent
   */
  async accessCamera(){
    try{
      let video = await navigator.mediaDevices.getUserMedia({video: true});
      let streams = this.videoElement.nativeElement;

      await faceapi.nets.tinyFaceDetector.loadFromUri('./assets/models/');
      await faceapi.nets.faceLandmark68Net.loadFromUri('./assets/models/');
      await faceapi.nets.faceExpressionNet.loadFromUri('./assets/models/');

      streams.srcObject = video;
      streams.play();
    } catch(err) {
      // ToDo: Change alert to a modal
      alert('Necesitamos permiso para accesar a tu cámara');
    }
  }


  playCamera(){
    this.videoElement.nativeElement.addEventListener('play', ()=>{
      const canvas = faceapi.createCanvasFromMedia(this.videoElement.nativeElement);
      document.body.append(canvas);
    })
  }


  ngOnInit() {
    this.accessCamera()
  }
}
