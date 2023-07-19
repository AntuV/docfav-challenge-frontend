import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesListComponent } from './games-list.component';
import { Title } from '@angular/platform-browser';
import { FTGApiService } from 'src/services/ftg-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GameFiltersComponent } from './ui/game-filters/game-filters.component';
import { GameCardComponent } from './ui/game-card/game-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from 'src/services/toast.service';
import { testGame } from 'src/app/test-data';

describe('GamesListComponent', () => {
  let component: GamesListComponent;
  let fixture: ComponentFixture<GamesListComponent>;
  let titleService: Title;
  let apiService: FTGApiService;
  let toastService: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        GamesListComponent,
        GameCardComponent,
        GameFiltersComponent
      ],
      providers: [FTGApiService]
    });
    fixture = TestBed.createComponent(GamesListComponent);
    component = fixture.componentInstance;
    titleService = TestBed.inject(Title);
    apiService = TestBed.inject(FTGApiService);
    toastService = TestBed.inject(ToastService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should be set to "FreeToGame"', () => {
    const titleSpy = spyOn(titleService, 'setTitle');
    component.ngOnInit();
    expect(titleSpy).toHaveBeenCalledOnceWith(`FreeToGame`);
  });

  it('should have a list of null values to show loading state', (done) => {
    expect(component.games$).toBeTruthy();
    component.games$!.subscribe((games) => {
      expect(games).toBeTruthy();
      expect(games.length).toBe(30);
      done();
    });
  });

  it('should list games from service when emitted', (done) => {
    const games = [testGame];

    component.games$!.subscribe((games) => {

      // Prevent test from passing if games are not loaded
      if (games.every(game => !game)) {
        return;
      }

      expect(games).toBeTruthy();
      expect(games.length).toBe(1);
      expect(games[0]).toEqual(games[0]);
      done();
    });

    apiService.games$.next(games);
  });

  it('should show error toast when service fails', (done) => {
    spyOn(apiService, 'loadGames').and.throwError('test');
    spyOn(console, 'error');
    spyOn(toastService, 'showDanger');

    component.ngOnInit().then(() => {
      expect(console.error).toHaveBeenCalled();
      expect(toastService.showDanger).toHaveBeenCalled();
      done();
    });
  });
});
