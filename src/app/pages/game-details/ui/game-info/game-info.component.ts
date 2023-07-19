import { Component, Input } from '@angular/core';
import { GameDetail } from 'src/types/game-detail.interface';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent {
  game?: GameDetail;

  /**
   * Flag to check if the game has system requirements
   * Due to inconsistencies in the API, we need to check if the object has any key with a value
   */
  hasSystemRequirements: boolean = false;

  @Input('game')
  set setGame(value: GameDetail | undefined) {
    this.game = value;

    this.hasSystemRequirements = !!value
      && !!value.minimum_system_requirements
      && Object.values(value.minimum_system_requirements).some(requirement => !!requirement);
  }
}
