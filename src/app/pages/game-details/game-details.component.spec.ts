import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameDetailsComponent } from './game-details.component';
import { FTGApiService } from 'src/services/ftg-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameHeaderComponent } from './ui/game-header/game-header.component';
import { GameInfoComponent } from './ui/game-info/game-info.component';
import { GameScreenshotsComponent } from './ui/game-screenshots/game-screenshots.component';
import { LightboxModule } from 'ngx-lightbox';
import { Title } from '@angular/platform-browser';
import { ToastService } from 'src/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { testGameDetail } from 'src/app/test-data';

describe('GameDetailsComponent', () => {
  let component: GameDetailsComponent;
  let fixture: ComponentFixture<GameDetailsComponent>;
  let titleService: Title;
  let apiService: FTGApiService;
  let toastService: ToastService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        LightboxModule,
        NgbCarouselModule
      ],
      declarations: [
        GameDetailsComponent,
        GameScreenshotsComponent,
        GameInfoComponent,
        GameHeaderComponent
      ],
      providers: [
        FTGApiService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 1, } } }
        }
      ]
    });
    fixture = TestBed.createComponent(GameDetailsComponent);
    component = fixture.componentInstance;
    titleService = TestBed.inject(Title);
    apiService = TestBed.inject(FTGApiService);
    toastService = TestBed.inject(ToastService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should be set to "[Game Title] - FreeToGame"', () => {
    const titleSpy = spyOn(titleService, 'setTitle');
    component.game = testGameDetail;
    component.setGameTitle();
    expect(titleSpy).toHaveBeenCalledOnceWith(`${testGameDetail.title} - FreeToGame`);
  });

  it('should show error toast when service fails', (done) => {
    spyOn(apiService, 'getGameDetails').and.throwError('test');
    spyOn(console, 'error');
    spyOn(toastService, 'showDanger');
    spyOn(router, 'navigate');

    component.ngOnInit().then(() => {
      expect(console.error).toHaveBeenCalled();
      expect(toastService.showDanger).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalledOnceWith(['/']);
      done();
    });
  });

  it('should set game when service succeeds', (done) => {
    spyOn(apiService, 'getGameDetails').and.returnValue(Promise.resolve(testGameDetail));
    component.ngOnInit().then(() => {
      expect(component.game).toEqual(testGameDetail);
      done();
    });
  });
});
