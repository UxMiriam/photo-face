import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components View
import { IdPhotoComponent } from '../id-photo/id-photo.component';
import { FacePhotoComponent } from '../face-photo/face-photo.component';
import { ValidationPhotosComponent } from '../validation-photos/validation-photos.component';

const routes: Routes = [
  { path: 'id-photo', component: IdPhotoComponent },
  { path: 'face-photo', component: FacePhotoComponent },
  { path: 'validation', component: ValidationPhotosComponent },
  { path: '**', component: IdPhotoComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
