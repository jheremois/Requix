import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscausuarioComponent } from './buscausuario.component';

describe('BuscausuarioComponent', () => {
  let component: BuscausuarioComponent;
  let fixture: ComponentFixture<BuscausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscausuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
