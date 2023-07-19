import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameFiltersComponent } from './game-filters.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FTGApiService } from 'src/services/ftg-api.service';

describe('GameFiltersComponent', () => {
  let component: GameFiltersComponent;
  let fixture: ComponentFixture<GameFiltersComponent>;
  let apiService: FTGApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameFiltersComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
    });
    fixture = TestBed.createComponent(GameFiltersComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(FTGApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const game1 = {
    id: 1,
    title: 'test',
    thumbnail: 'test',
    short_description: 'test',
    game_url: 'test',
    genre: 'test',
    platform: 'test',
    publisher: 'test',
    developer: 'test',
    release_date: 'test',
    freetogame_profile_url: 'test'
  };

  const game2 = {
    id: 2,
    title: 'test2',
    thumbnail: 'test',
    short_description: 'test',
    game_url: 'test',
    genre: 'test2',
    platform: 'test',
    publisher: 'test2',
    developer: 'test',
    release_date: 'test',
    freetogame_profile_url: 'test'
  };

  it('should group genres from games', (done) => {
    component.genres$!.subscribe((genres) => {
      expect(genres).toBeTruthy();
      expect(genres.length).toBe(2);
      expect(genres[0]).toBe('test');
      expect(genres[1]).toBe('test2');
      done();
    });

    component.ngOnInit();

    apiService.games = [game1, game2];
    apiService.games$.next(apiService.games);
  });

  it('should group platforms from games', (done) => {
    component.platforms$!.subscribe((platforms) => {
      expect(platforms).toBeTruthy();
      expect(platforms.length).toBe(1);
      expect(platforms[0]).toBe('test');
      done();
    });

    component.ngOnInit();

    apiService.games = [game1, game2];
    apiService.games$.next(apiService.games);
  });

  it('should filter when name changes', () => {
    spyOn(apiService, 'filterGames');
    component.ngOnInit();
    component.form.patchValue({ name: 'test2' });
    expect(apiService.filterGames).toHaveBeenCalledWith({ genre: '', name: 'test2', platform: '' });
  });

  it('should filter when genre changes', () => {
    spyOn(apiService, 'filterGames');
    component.ngOnInit();
    component.form.patchValue({ genre: 'test2' });
    expect(apiService.filterGames).toHaveBeenCalledWith({ genre: 'test2', name: '', platform: '' });
  });

  it('should filter when platform changes', () => {
    spyOn(apiService, 'filterGames');
    component.ngOnInit();
    component.form.patchValue({ platform: 'test2' });
    expect(apiService.filterGames).toHaveBeenCalledWith({ genre: '', name: '', platform: 'test2' });
  });
});
