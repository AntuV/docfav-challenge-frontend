import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Game } from 'src/types/game.interface';
import { Subject, lastValueFrom, tap } from 'rxjs';
import { GameDetail } from 'src/types/game-detail.interface';
import { GameFilters } from 'src/types/game-filters.interface';

/**
 * Servicio para obtención de datos de la API de [FreeToGame](https://www.freetogame.com/api-doc)
 */
@Injectable({
  providedIn: 'root'
})
export class FTGApiService {
  baseUrl: string = environment.apiUrl;

  private games: Game[] = [];

  games$ = new Subject<Game[]>();
  filteredGames$ = new Subject<Game[]>();

  constructor(
    private http: HttpClient
  ) {
    this.games$.pipe(
      tap(games => {
        this.filteredGames$.next(games)
      })
    ).subscribe();
  }

  async loadGames(): Promise<void> {
    this.games = await lastValueFrom(this.http.get<Game[]>(`${this.baseUrl}/games`));
    this.games$.next(this.games);
  }

  filterGames(filters: GameFilters) {
    let filteredGames = this.games;

    if (filters.name) {
      filteredGames = filteredGames.filter(game => game.title.toLowerCase().includes(filters.name!.toLowerCase()));
    }

    if (filters.genre) {
      filteredGames = filteredGames.filter(game => game.genre === filters.genre);
    }

    if (filters.platform) {
      filteredGames = filteredGames.filter(game => game.platform === filters.platform);
    }

    this.filteredGames$.next(filteredGames);
  }

  getGameDetails(id: number): Promise<GameDetail> {
    return lastValueFrom(this.http.get<GameDetail>(`${this.baseUrl}/game`, { params: { id }}));
  }
}
