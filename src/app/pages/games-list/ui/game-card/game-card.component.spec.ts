import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameCardComponent } from './game-card.component';
import { testGame } from 'src/app/test-data';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameCardComponent]
    });
    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be in loading state if no game is provided', () => {
    expect(component.game).toBeFalsy();
    const imageSkeleton = fixture.nativeElement.querySelector('.card-img-top.loading-skeleton.image-skeleton');
    expect(imageSkeleton).toBeTruthy();
  });

  it('should display game info if game is provided', () => {
    component.game = testGame;
    fixture.detectChanges();
    const imageSkeleton = fixture.nativeElement.querySelector('.card-img-top.loading-skeleton.image-skeleton');
    expect(imageSkeleton).toBeFalsy();
    const cardTitle = fixture.nativeElement.querySelector('.card-title');
    expect(cardTitle.textContent).toBe(testGame.title);
    const cardText = fixture.nativeElement.querySelector('.card-text');
    expect(cardText.textContent).toBe(testGame.short_description);
    const cardBadge = fixture.nativeElement.querySelector('.badge.rounded-pill');
    expect(cardBadge.textContent).toBe(testGame.genre);
  });

  it('should add shadow-lg class on mouse hover', () => {
    const card = fixture.nativeElement;
    card.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(card.classList).toContain('shadow-lg');

    card.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();
    expect(card.classList).not.toContain('shadow-lg');
  });
});
