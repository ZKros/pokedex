import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListGen2Component } from './pokemon-list-gen2.component';

describe('PokemonListGen2Component', () => {
  let component: PokemonListGen2Component;
  let fixture: ComponentFixture<PokemonListGen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListGen2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListGen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
