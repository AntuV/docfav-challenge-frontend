import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailsComponent } from './game-details.component';
import { GameScreenshotsComponent } from './ui/game-screenshots/game-screenshots.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { GameInfoComponent } from './ui/game-info/game-info.component';
import { GameHeaderComponent } from './ui/game-header/game-header.component';

const routes: Routes = [
  {
    path: '',
    component: GameDetailsComponent
  }
];

@NgModule({
  declarations: [
    GameDetailsComponent,
    GameScreenshotsComponent,
    GameInfoComponent,
    GameHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbCarouselModule,
    LightboxModule
  ],
  exports: [RouterModule]
})
export class GameDetailsModule { }
