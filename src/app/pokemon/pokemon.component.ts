import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokedexComponent } from './pokedex/pokedex.component';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

	constructor(
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
	}

	openPokedex(): void {
		const dialogRef = this.dialog.open(PokedexComponent, {
			width: '1000px',
			height: '500px',
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was close');
		});
	}
}
