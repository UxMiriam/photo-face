import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() url!: string;

  constructor(private router: Router) { }

  /**
  * Request user access to cam otherwise send error
  *
  * @memberof VideoPlayerComponent
  */
  async accessCamera() {
    try {
      let video = await navigator.mediaDevices.getUserMedia({ video: true });

      await faceapi.nets.tinyFaceDetector.loadFromUri('./assets/models/');
      await faceapi.nets.faceLandmark68Net.loadFromUri('./assets/models/');
      await faceapi.nets.faceExpressionNet.loadFromUri('./assets/models/');

      let streams = this.videoElement.nativeElement;
      streams.srcObject = video;
      this.playCamera();
    } catch (err) {
      // ToDo: Change alert to a modal
      alert('Necesitamos permiso para accesar a tu cámara');
    }
  }

  /**
   * Face detection
   *
   * @memberof VideoPlayerComponent
   */
  playCamera() {
    this.videoElement.nativeElement.addEventListener('play', () => {
      const canvas = faceapi.createCanvasFromMedia(this.videoElement.nativeElement);
      document.getElementById('photoWrapper')?.prepend(canvas);

      const displaySize = { width: this.videoElement.nativeElement.width, height: this.videoElement.nativeElement.height };
      faceapi.matchDimensions(canvas, displaySize)

      setInterval(async () => {
        const detections = await faceapi.detectAllFaces(this.videoElement.nativeElement, new faceapi.TinyFaceDetectorOptions());
        const resizeDetections = faceapi.resizeResults(detections, displaySize);

        canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);

        faceapi.draw.drawDetections(canvas, resizeDetections);
        if(detections.length > 0){
          this.nextPage()
        }

      }, 500)
    })

  }

  nextPage(){
    setInterval(()=>{
      this.router.navigate([this.url]);
    }, 3000)
  }


  ngOnInit() {
    this.accessCamera();
  }
}
