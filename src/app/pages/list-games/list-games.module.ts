import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListGamesComponent } from './list-games.component';
import { GameCardComponent } from './ui/game-card/game-card.component';
import { GameFiltersComponent } from './ui/game-filters/game-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ListGamesComponent
  }
];

@NgModule({
  declarations: [ListGamesComponent, GameCardComponent, GameFiltersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ListGamesModule { }
