import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHeaderComponent } from './game-header.component';
import { testGameDetail } from 'src/app/test-data';

describe('GameHeaderComponent', () => {
  let component: GameHeaderComponent;
  let fixture: ComponentFixture<GameHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameHeaderComponent]
    });
    fixture = TestBed.createComponent(GameHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be in loading state if no game is provided', () => {
    expect(component.game).toBeFalsy();
    const imageSkeleton = fixture.nativeElement.querySelector('.loading-image');
    expect(imageSkeleton).toBeTruthy();
  });

  it('should display game info if game is provided', () => {
    component.game = testGameDetail;
    fixture.detectChanges();

    const thumbnail = fixture.nativeElement.querySelector('img');
    expect(thumbnail.src).toBe(testGameDetail.thumbnail);

    const title = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toBe(testGameDetail.title);

    const genreBadge = fixture.nativeElement.querySelector('.badge.text-bg-primary');
    expect(genreBadge.textContent).toBe(testGameDetail.genre);

    const platformBadge = fixture.nativeElement.querySelector('.badge.text-bg-dark');
    expect(platformBadge.textContent).toBe(testGameDetail.platform);

    const playButton = fixture.nativeElement.querySelector('.btn-primary');
    expect(playButton.href).toBe(testGameDetail.game_url);

    const ftgProfileButton = fixture.nativeElement.querySelector('.btn-outline-secondary');
    expect(ftgProfileButton.href).toBe(testGameDetail.freetogame_profile_url);
  });
});
