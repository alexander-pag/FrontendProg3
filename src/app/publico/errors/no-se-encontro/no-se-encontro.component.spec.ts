import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSeEncontroComponent } from './no-se-encontro.component';

describe('NoSeEncontroComponent', () => {
  let component: NoSeEncontroComponent;
  let fixture: ComponentFixture<NoSeEncontroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSeEncontroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSeEncontroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
