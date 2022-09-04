import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http'
import { PokemonService } from './services/pokemon.service';
import { PokedexComponent } from './pokedex/pokedex.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [
		AppComponent,
		PokemonListComponent,
		PokemonCardComponent,
		PokedexComponent,
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
