import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {StringValidatePipe} from "./string-validate.pipe";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StringValidatePipe
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as label 'write something in the input field to change this label'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.label).toEqual('write something in the input field to change this label');
  });

  it('should render title "Task 1"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain('Task 1');
  });
});
