import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameScreenshotsComponent } from './game-screenshots.component';
import { LightboxModule } from 'ngx-lightbox';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { testGameDetail } from 'src/app/test-data';

describe('GameScreenshotsComponent', () => {
  let component: GameScreenshotsComponent;
  let fixture: ComponentFixture<GameScreenshotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameScreenshotsComponent],
      imports: [
        NgbCarouselModule,
        LightboxModule
      ]
    });
    fixture = TestBed.createComponent(GameScreenshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be in loading state if no game is provided', () => {
    expect(component.screenshots).toBeFalsy();
    const imageSkeleton = fixture.nativeElement.querySelector('.loading-skeleton');
    expect(imageSkeleton).toBeTruthy();
  });

  it('should display game info if game is provided', () => {
    component.screenshots = testGameDetail.screenshots;
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image).toBeTruthy();
    expect(image.src).toEqual(testGameDetail.screenshots[0].image);
  });
});
