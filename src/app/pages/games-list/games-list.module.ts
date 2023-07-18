import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './games-list.component';
import { GameCardComponent } from './ui/game-card/game-card.component';
import { GameFiltersComponent } from './ui/game-filters/game-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: GamesListComponent
  }
];

@NgModule({
  declarations: [GamesListComponent, GameCardComponent, GameFiltersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class GamesListModule { }
