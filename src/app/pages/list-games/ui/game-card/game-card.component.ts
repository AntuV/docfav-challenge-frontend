import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Game } from 'src/types/game.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  host: {
    class: 'card d-flex flex-column shadow'
  }
})
export class GameCardComponent {
  @Input() game?: Game;

  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) { }

  @HostListener('mouseenter')
  onHover() {
    this.elementRef.nativeElement.classList.add('shadow-lg');
  }

  @HostListener('mouseleave')
  onLeave() {
    this.elementRef.nativeElement.classList.remove('shadow-lg');
  }
}
