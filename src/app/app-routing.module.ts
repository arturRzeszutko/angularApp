import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

const routes: Routes = [
  {path: 'posts' , component: MainPageComponent},
  {path: 'photos' , component: PhotosComponent},
  {path: 'profile' , component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 