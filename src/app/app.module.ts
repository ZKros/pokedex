import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { PokemonService } from './services/pokemon.service';
import { MatDialogModule } from '@angular/material/dialog';
import { PokemonCardComponent } from './pages/gen1/pokemon-card/pokemon-card.component';

import { PokemonSearchComponent } from './pages/gen1/pokemon-search/pokemon-search.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonListGen1Component } from './pages/gen1/pokemon-list-gen1/pokemon-list-gen1.component';


@NgModule({
	declarations: [
		AppComponent,
		PokemonListGen1Component,
		PokemonCardComponent,
		PokedexComponent,
		PokemonSearchComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatDialogModule,
	],
	providers: [PokemonService],
	bootstrap: [AppComponent]
})
export class AppModule { }
