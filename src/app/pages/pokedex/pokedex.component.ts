import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonListGen1Component } from '../gen1/pokemon-list-gen1/pokemon-list-gen1.component';
import { PokemonListGen2Component } from '../gen2/pokemon-list-gen2/pokemon-list-gen2.component';



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

	openGen1() {
		this.dialog.open(PokemonListGen1Component, {
			height: '2000px',
			width: '1500px',
			panelClass: 'my-class'
		});
	}
	openGen2() {
		this.dialog.open(PokemonListGen2Component, {
			height: '2000px',
			width: '1500px',
			panelClass: 'my-class'
		});
	}
}
