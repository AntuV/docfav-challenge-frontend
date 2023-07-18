import { Component, OnInit } from '@angular/core';
import { Observable, startWith } from 'rxjs';
import { FTGApiService } from 'src/services/ftg-api.service';
import { ToastService } from 'src/services/toast.service';
import { Game } from 'src/types/game.interface';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit {

  games$?: Observable<Game[]>;

  constructor(
    private api: FTGApiService,
    private toast: ToastService
  ) { }

  async ngOnInit(): Promise<void> {

    this.games$ = this.api.filteredGames$.pipe(
      startWith(Array(30).fill(null))
    );

    try {
      await this.api.loadGames();
    } catch (err) {
      console.error(err);
      this.toast.showDanger('No se pudo obtener el listado de juegos');
    }
  }

  async getGames() {
    
  }

}
