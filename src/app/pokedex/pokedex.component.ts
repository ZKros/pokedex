import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';

@Component({
	selector: 'app-pokedex',
	templateUrl: './pokedex.component.html',
	styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

	constructor(
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
	}

	openPokedex() {
		this.dialog.open(PokemonListComponent, {
			height: '2000px',
			width: '1500px',
			panelClass:'my-class'
		});
	}
}
