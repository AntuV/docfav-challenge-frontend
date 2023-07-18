import { Component, Input } from '@angular/core';
import { GameDetail } from 'src/types/game-detail.interface';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.scss']
})
export class GameHeaderComponent {
  @Input() game?: GameDetail
}
