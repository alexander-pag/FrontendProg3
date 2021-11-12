import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesProductoComponent } from './imagenes-producto.component';

describe('ImagenesProductoComponent', () => {
  let component: ImagenesProductoComponent;
  let fixture: ComponentFixture<ImagenesProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenesProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
