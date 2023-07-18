import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { FTGApiService } from 'src/services/ftg-api.service';
import { GameFilters } from 'src/types/game-filters.interface';

@Component({
  selector: 'app-game-filters',
  templateUrl: './game-filters.component.html',
  styleUrls: ['./game-filters.component.scss']
})
export class GameFiltersComponent implements OnInit {

  genres$?: Observable<string[]>;
  platforms$?: Observable<string[]>;

  form = new FormGroup({
    name: new FormControl<string>(''),
    genre: new FormControl<string>(''),
    platform: new FormControl<string>('')
  });

  constructor(
    private api: FTGApiService
  ) { }

  ngOnInit(): void {
    this.genres$ = this.api.games$.pipe(
      map(games => games.map(game => game.genre)),
      map(genres => genres.filter((genre, index) => genres.indexOf(genre) === index))
    );

    this.platforms$ = this.api.games$.pipe(
      map(games => games.map(game => game.platform)),
      map(platforms => platforms.filter((platform, index) => platforms.indexOf(platform) === index))
    );

    this.form.valueChanges.subscribe((filters: GameFilters) => this.api.filterGames(filters));
  }
}
