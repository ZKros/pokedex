import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
@NgModule({
	declarations: [
		AppComponent,
  PokemonListComponent,
  PokemonCardComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
