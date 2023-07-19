import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, startWith } from 'rxjs';
import { FTGApiService } from 'src/services/ftg-api.service';
import { ToastService } from 'src/services/toast.service';
import { Game } from 'src/types/game.interface';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  games$?: Observable<Game[]>;

  constructor(
    private api: FTGApiService,
    private toast: ToastService,
    private title: Title
  ) { }

  async ngOnInit(): Promise<void> {
    this.title.setTitle('FreeToGame');

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
}
