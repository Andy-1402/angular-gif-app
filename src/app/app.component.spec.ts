import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [
        RouterModule.forRoot([])
      ],
=======
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gifs-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('gifs-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, gifs-app');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('gifs-app app is running!');
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
  });
});
