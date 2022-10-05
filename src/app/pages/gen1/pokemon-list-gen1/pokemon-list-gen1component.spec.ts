import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListGen1Component } from './pokemon-list-gen1.component';

describe('PokemonListComponent', () => {
  let component: PokemonListGen1Component;
  let fixture: ComponentFixture<PokemonListGen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListGen1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListGen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
