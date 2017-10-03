/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect  } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('App: Example Validator/Directive', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
          FormsModule,
          RouterTestingModule
          ],
      declarations: [
          AppComponent
          ],
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: true }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
  });

  fit('should create the app', () => {
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
  });

});
