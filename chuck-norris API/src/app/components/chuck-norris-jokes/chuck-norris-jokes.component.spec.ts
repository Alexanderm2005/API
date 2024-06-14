import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisJokesComponent } from './chuck-norris-jokes.component';

describe('ChuckNorrisJokesComponent', () => {
  let component: ChuckNorrisJokesComponent;
  let fixture: ComponentFixture<ChuckNorrisJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChuckNorrisJokesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChuckNorrisJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
