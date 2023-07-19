import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInfoComponent } from './game-info.component';
import { testGameDetail } from 'src/app/test-data';
import { DatePipe } from '@angular/common';

describe('GameInfoComponent', () => {
  let component: GameInfoComponent;
  let fixture: ComponentFixture<GameInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameInfoComponent]
    });
    fixture = TestBed.createComponent(GameInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be in loading state if no game is provided', () => {
    expect(component.game).toBeFalsy();
    const skeleton = fixture.nativeElement.querySelector('.loading-skeleton');
    expect(skeleton).toBeTruthy();
  });

  it('should display game info if game is provided', () => {
    component.game = testGameDetail;
    fixture.detectChanges();

    const about = fixture.nativeElement.querySelector('#about');
    expect(about.textContent).toBe(`About ${testGameDetail.title}`);

    const publisher = fixture.nativeElement.querySelector('#publisher');
    expect(publisher.textContent.split(': ')[1]).toBe(testGameDetail.publisher);

    const developer = fixture.nativeElement.querySelector('#developer');
    expect(developer.textContent.split(': ')[1]).toBe(testGameDetail.developer);

    const datePipe = new DatePipe('en-US');
    const releaseDate = fixture.nativeElement.querySelector('#release-date');
    expect(releaseDate.textContent.split(': ')[1]).toBe(datePipe.transform(testGameDetail.release_date, 'fullDate'));

    const requirements = fixture.nativeElement.querySelectorAll('td');
    expect(requirements[0].textContent).toBe(testGameDetail.minimum_system_requirements.os);
    expect(requirements[1].textContent).toBe(testGameDetail.minimum_system_requirements.processor);
    expect(requirements[2].textContent).toBe(testGameDetail.minimum_system_requirements.memory);
    expect(requirements[3].textContent).toBe(testGameDetail.minimum_system_requirements.graphics);
    expect(requirements[4].textContent).toBe(testGameDetail.minimum_system_requirements.storage);    
  });
});
