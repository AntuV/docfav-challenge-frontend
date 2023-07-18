import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FTGApiService } from 'src/services/ftg-api.service';
import { ToastService } from 'src/services/toast.service';
import { GameDetail } from 'src/types/game-detail.interface';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  game?: GameDetail;

  constructor(
    private api: FTGApiService,
    private route: ActivatedRoute,
    private title: Title,
    private toast: ToastService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    const id: string = this.route.snapshot.paramMap.get('id')!;

    try {
      this.game = await this.api.getGameDetails(parseInt(id));
      this.title.setTitle(`${this.game.title} - FreeToGame`);
    } catch (err) {
      console.error(err);
      this.toast.showDanger('No se pudieron obtener los detalles del juego');
      this.router.navigate(['/']);
    }
  }
}
