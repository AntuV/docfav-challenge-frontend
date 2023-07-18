import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScreenshotsComponent } from './game-screenshots.component';

describe('GameScreenshotsComponent', () => {
  let component: GameScreenshotsComponent;
  let fixture: ComponentFixture<GameScreenshotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameScreenshotsComponent]
    });
    fixture = TestBed.createComponent(GameScreenshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
