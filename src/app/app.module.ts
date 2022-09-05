import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pages/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http'
import { PokemonService } from './services/pokemon.service';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { RoutingModule } from './pages/routing.module';

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
		MatDialogModule,
		RouterModule,
		RouterTestingModule,
		RoutingModule
	],
	providers: [PokemonService],
	bootstrap: [AppComponent]
})
export class AppModule { }
