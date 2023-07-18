import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { GameScreenshot } from 'src/types/game-detail.interface';

@Component({
  selector: 'app-game-screenshots',
  templateUrl: './game-screenshots.component.html',
  styleUrls: ['./game-screenshots.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameScreenshotsComponent {
  @Input() screenshots?: GameScreenshot[];

  constructor(
    private lightbox: Lightbox
  ) { }

  open(index: number): void {
    const images = this.screenshots!.map(screenshot => ({
      src: screenshot.image,
      thumb: screenshot.image
    }));

    this.lightbox.open(images, index);
  }
}
