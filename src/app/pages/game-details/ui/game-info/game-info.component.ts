import { Component, Input } from '@angular/core';
import { GameDetail } from 'src/types/game-detail.interface';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent {
  @Input() game?: GameDetail;
}
