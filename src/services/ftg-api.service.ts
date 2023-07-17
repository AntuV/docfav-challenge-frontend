import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ListGamesFilters } from 'src/types/list-games-filters.model';
import { Game } from 'src/types/game.interface';
import { Observable } from 'rxjs';
import { GameDetail } from 'src/types/game-detail.interface';

/**
 * Servicio para obtención de datos de la API de [FreeToGame](https://www.freetogame.com/api-doc)
 */
@Injectable({
  providedIn: 'root'
})
export class FTGApiService {
  baseUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  listGames(filters: ListGamesFilters): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/games`, { params: filters.toQueryParams() });
  }

  getGameDetails(id: number): Observable<GameDetail> {
    return this.http.get<GameDetail>(`${this.baseUrl}/game?id=${id}`);
  }
}
