import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components View
import { IdPhotoComponent } from '../id-photo/id-photo.component';

const routes: Routes = [
  { path: 'id-photo', component: IdPhotoComponent },
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
