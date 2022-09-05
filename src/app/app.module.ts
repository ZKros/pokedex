import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { PokemonService } from './services/pokemon.service';
import { MatDialogModule } from '@angular/material/dialog';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonCardComponent } from './pages/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonSearchComponent } from './pages/pokemon-search/pokemon-search.component';

@NgModule({
	declarations: [
		AppComponent,
		PokemonListComponent,
		PokemonCardComponent,
		PokedexComponent,
  PokemonSearchComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatDialogModule
	],
	providers: [PokemonService],
	bootstrap: [AppComponent]
})
export class AppModule { }
